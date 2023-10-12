import { useState, createContext, useContext, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
    isFolder,
    getFolderContent,
    addNewFolder,
    addNewFile,
    removeEntry,
    copyEntry,
    renameEntry,
    moveEntry,
} from "./fileSystemUtils";

// wrapper

function ApplyContextMenu({ children, items }) {
    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                      mouseX: event.clientX,
                      mouseY: event.clientY,
                  }
                : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
                  // Other native context menus might behave different.
                  // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
                  null
        );
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    return (
        <>
            <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
                {children}
                <Menu
                    open={contextMenu !== null}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={
                        contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
                    }
                >
                    {items.map((item) => {
                        return (
                            <MenuItem
                                key={crypto.randomUUID()}
                                onClick={() => {
                                    handleClose();
                                    item.handler();
                                }}
                            >
                                {item.name}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </div>
        </>
    );
}

function ApplyDrop({ children, onDropHandler }) {
    return (
        <div
            onDrop={onDropHandler}
            onDragOver={(event) => {
                event.preventDefault(); // to allow drop
            }}
        >
            {children}
        </div>
    );
}

// Entry
Object.defineProperty(Date.prototype, "YYYYMMDDHHMMSS", {
    // https://stackoverflow.com/a/19449076/7037749
    value: function () {
        function pad2(n) {
            // always returns a string
            return (n < 10 ? "0" : "") + n;
        }

        return (
            this.getFullYear() +
            pad2(this.getMonth() + 1) +
            pad2(this.getDate()) +
            pad2(this.getHours()) +
            pad2(this.getMinutes()) +
            pad2(this.getSeconds())
        );
    },
});

function ContentEntry({ entryHandle }) {
    const { currentFolderHandle: parentHandle, onFileClick, showFolderView } = useContext(FolderContent);
    const { setEntryOnDrag, handleDrop } = useContext(DragContext);
    // handler
    const items = [
        {
            name: "rename",
            handler: () => {
                console.log("rename handler called");
                const names = getFolderContent(parentHandle).map((entry) => {
                    entry.name;
                });
                let newName = "";
                while (true) {
                    let info = "";
                    if (isFolder(entryHandle)) {
                        info = "Please enter a new folder name";
                    } else {
                        info = "Please enter a new file name including extension";
                    }
                    newName = prompt(info, entryHandle.name);
                    if (newName == null || newName == "") {
                        return;
                    } else {
                        if (!names.includes(newName)) {
                            break;
                        }
                    }
                }
                renameEntry(parentHandle, entryHandle);
            },
        },
        {
            name: "duplicate",
            handler: () => {
                console.log("duplicate handler called");
                const now = new Date();
                copyEntry(entryHandle, parentHandle, entryHandle.name + "_copy_" + now.YYYYMMDDHHMMSS());
            },
        },
        {
            name: "remove",
            handler: () => {
                console.log("remove handler called");
                removeEntry(parentHandle, entryHandle);
            },
        },
    ];
    function onClickHandler(event) {
        console.log(event);
        if (isFolder(entryHandle)) {
            showFolderView(entryHandle);
        } else {
            onFileClick(entryHandle);
        }
    }
    function onDragHandler(event) {
        console.log(event);
        setEntryOnDrag(entryHandle);
    }
    function onDropHandler(event) {
        console.log(event);
        handleDrop(entryHandle);
    }
    const entry = (
        <ApplyContextMenu items={items}>
            <ListItem disablePadding>
                <ListItemButton onClick={onClickHandler}>
                    <ListItemIcon>{isFolder ? <FolderIcon /> : <InsertDriveFileIcon />}</ListItemIcon>
                    <ListItemText draggable={true} onDragStart={onDragHandler} primary={entryHandle.name} />
                </ListItemButton>
            </ListItem>
        </ApplyContextMenu>
    );
    return isFolder ? <ApplyDrop onDropHandler={onDropHandler}>{entry}</ApplyDrop> : entry;
}

function PathEntry({ entryHandle }) {
    const { showFolderView } = useContext(FolderContent);
    const { handleDrop } = useContext(DragContext);
    function onDropHandler(event) {
        console.log(event);
        handleDrop(entryHandle);
    }
    function onClickHandler(event) {
        console.log(event);
        showFolderView(entryHandle);
    }
    return (
        <ApplyDrop onDropHandler={onDropHandler}>
            <Button size="small" onClick={onClickHandler} sx={{ minWidth: 10 }}>
                {entryHandle.name}
            </Button>
        </ApplyDrop>
    );
}

function AddEntry() {
    const { currentFolderHandle: parentHandle } = useContext(CurFolderContext);
    const now = new Date();
    const actions = [
        {
            icon: <InsertDriveFileIcon />,
            name: "new file",
            handler: () => {
                addNewFile(parentHandle, "new_file_" + now.YYYYMMDDHHMMSS());
            },
        },
        {
            icon: <FolderIcon />,
            name: "new folder",
            handler: () => {
                addNewFolder(parentHandle, "new_folder_" + now.YYYYMMDDHHMMSS());
            },
        },
    ];
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
            ))}
        </SpeedDial>
    );
}

// over all

const CurFolderContext = createContext();
const DragContext = createContext();

function FolderView({ path2FolderHandles, onFileClick }) {
    const [currentFolderHandle, setCurrentFolderHandle] = useState();
    const [entryOnDrag, setEntryOnDrag] = useState();
    const [path, setPath] = useState([]);
    const [content, setContent] = useState([]);
    useEffect(() => {
        async function showRoot() {
            const root = await path2FolderHandles("");
            await showFolderView(root);
        }
        showRoot();
    }, []);
    async function showFolderView(folderHandle) {
        setCurrentFolderHandle(folderHandle);
        setContent(await getFolderContent(folderHandle));
        if (folderHandle in path) {
            //TODO
            //set path to until folderHandle
        } else {
            setPath((curPath) => {
                [...path, folderHandle];
            });
        }
        console.log(folderHandle.name);
    }
    function handleDrop(targetFolder) {
        if (targetFolder.isSameEntry(entryOnDrag)) {
            return;
        }
        moveEntry(currentFolderHandle, entryOnDrag, targetFolder);
    }
    return (
        <CurFolderContext.Provider value={{ currentFolderHandle, onFileClick, showFolderView }}>
            <DragContext.Provider value={{ setEntryOnDrag, handleDrop }}>
                <Breadcrumbs aria-label="breadcrumb">
                    {path.map((entry) => (
                        <PathEntry entryHandle={entry} key={crypto.randomUUID()} />
                    ))}
                </Breadcrumbs>
                <Divider />
                <List>
                    {content.map((entry) => (
                        <ContentEntry entryHandle={entry} key={crypto.randomUUID()} />
                    ))}
                </List>
                <AddEntry />
            </DragContext.Provider>
        </CurFolderContext.Provider>
    );
}

export default FolderView;
