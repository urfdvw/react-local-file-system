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
    checkFileExists,
    checkFolderExists,
    addNewFolder,
    addNewFile,
    removeEntry,
    copyEntry,
    renameEntry,
    moveEntry,
} from "./fileSystemUtils";

//util
function dateString() {
    try {
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
    } catch {}
    const now = new Date();
    return now.YYYYMMDDHHMMSS();
}

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

function ContentEntry({ entryHandle }) {
    const { currentFolderHandle, onFileClick, showFolderView } = useContext(CurFolderContext);
    const { setEntryOnDrag, handleDrop } = useContext(DragContext);
    // handler
    const items = [
        {
            name: "rename",
            handler: async (event) => {
                console.log("ContentEntry rename handler called", event);
                const newName = prompt("new name", entryHandle.name);
                await renameEntry(currentFolderHandle, entryHandle, newName);
                await showFolderView(currentFolderHandle);
            },
        },
        {
            name: "duplicate",
            handler: async (event) => {
                console.log("ContentEntry duplicate handler called", event);
                await copyEntry(entryHandle, currentFolderHandle, entryHandle.name + "_copy_" + dateString());
                await showFolderView(currentFolderHandle);
            },
        },
        {
            name: "remove",
            handler: async (event) => {
                console.log("ContentEntry remove handler called", event);
                await removeEntry(currentFolderHandle, entryHandle);
                await showFolderView(currentFolderHandle);
            },
        },
    ];
    function onClickHandler(event) {
        console.log("ContentEntry onClickHandler called", event);
        if (isFolder(entryHandle)) {
            showFolderView(entryHandle);
        } else {
            onFileClick(entryHandle);
        }
    }
    function onDragHandler(event) {
        console.log("ContentEntry onDragHandler called", event);
        setEntryOnDrag(entryHandle);
    }
    function onDropHandler(event) {
        console.log("ContentEntry onDropHandler called", event);
        handleDrop(entryHandle);
    }
    const entry = (
        <ApplyContextMenu items={items}>
            <ListItem disablePadding>
                <ListItemButton onClick={onClickHandler}>
                    <ListItemIcon>{isFolder(entryHandle) ? <FolderIcon /> : <InsertDriveFileIcon />}</ListItemIcon>
                    <ListItemText draggable={true} onDragStart={onDragHandler} primary={entryHandle.name} />
                </ListItemButton>
            </ListItem>
        </ApplyContextMenu>
    );
    return isFolder(entryHandle) ? <ApplyDrop onDropHandler={onDropHandler}>{entry}</ApplyDrop> : entry;
}

function PathEntry({ entryHandle }) {
    const { showFolderView } = useContext(CurFolderContext);
    const { handleDrop } = useContext(DragContext);
    function onDropHandler(event) {
        console.log("PathEntry onDropHandler called", event);
        handleDrop(entryHandle);
    }
    function onClickHandler(event) {
        console.log("PathEntry onClickHandler called", event);
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
    const { showFolderView, currentFolderHandle } = useContext(CurFolderContext);
    const actions = [
        {
            icon: <InsertDriveFileIcon />,
            name: "new file",
            handler: async (event) => {
                console.log("AddEntry new file called", event);
                await addNewFile(currentFolderHandle, "new_file_" + dateString());
                await showFolderView(currentFolderHandle);
            },
        },
        {
            icon: <FolderIcon />,
            name: "new folder",
            handler: async (event) => {
                console.log("AddEntry new folder called", event);
                addNewFolder(currentFolderHandle, "new_folder_" + dateString());
                await showFolderView(currentFolderHandle);
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
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.handler}
                />
            ))}
        </SpeedDial>
    );
}

// over all

const CurFolderContext = createContext();
const DragContext = createContext();

function FolderView({ rootFolder, onFileClick }) {
    const [currentFolderHandle, setCurrentFolderHandle] = useState(rootFolder);
    const [entryOnDrag, setEntryOnDrag] = useState();
    const [path, setPath] = useState([rootFolder]);
    const [content, setContent] = useState([]);
    useEffect(() => {
        async function showRoot() {
            await showFolderView(currentFolderHandle);
        }
        showRoot();
    }, []);
    async function showFolderView(folderHandle) {
        // set context
        setCurrentFolderHandle(folderHandle);
        // set content
        setContent(await getFolderContent(folderHandle));
        // set path
        // if folderHandle in path, cut what ever behind it
        for (var i = 0; i < path.length; i++) {
            if (await folderHandle.isSameEntry(path[i])) {
                setPath((curPath) => {
                    return curPath.slice(0, i + 1);
                });
                return;
            }
        }
        // else, append folderHandle at the back
        setPath((curPath) => {
            return [...curPath, folderHandle];
        });
    }
    async function handleDrop(targetFolder) {
        if (await targetFolder.isSameEntry(entryOnDrag)) {
            return;
        }
        await moveEntry(currentFolderHandle, entryOnDrag, targetFolder);
        await showFolderView(currentFolderHandle);
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
                    {content
                        .sort((a, b) => {
                            if (isFolder(a) && !isFolder(b)) {
                                return -1;
                            }
                            if (!isFolder(a) && isFolder(b)) {
                                return 1;
                            }
                            if (a.name < b.name) {
                                return -1;
                            }
                            if (a.name > b.name) {
                                return 1;
                            }
                            return 0;
                        })
                        .map((entry) => (
                            <ContentEntry entryHandle={entry} key={crypto.randomUUID()} />
                        ))}
                </List>
                <AddEntry />
            </DragContext.Provider>
        </CurFolderContext.Provider>
    );
}

export default FolderView;
