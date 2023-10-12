import { useState, createContext, useContext } from "react";
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

function ApplyRenameDuplicateRemoveMenu({ children, renameHandler, duplicateHandler, removeHandler }) {
    const items = [
        {
            name: "rename",
            handler: () => {
                console.log("rename handler called");
                renameHandler();
            },
        },
        {
            name: "duplicate",
            handler: () => {
                console.log("duplicate handler called");
                duplicateHandler();
            },
        },
        {
            name: "remove",
            handler: () => {
                console.log("remove handler called");
                removeHandler();
            },
        },
    ];

    return <ApplyContextMenu items={items}>{children}</ApplyContextMenu>;
}

function ApplyDrop({ children, onDropHandler }) {
    return (
        <div
            onDrop={(event) => {
                console.log("onDrop");
                console.log(event);
                console.log(JSON.parse(event.dataTransfer.getData("data")));
                onDropHandler();
            }}
            onDragOver={(event) => {
                event.preventDefault(); // to allow drop
            }}
        >
            {children}
        </div>
    );
}

// Entry

function ContentEntry({
    isFolder,
    entryName,
    onClickHandler,
    onDragHandler,
    onDropHandler,
    renameHandler,
    duplicateHandler,
    removeHandler,
}) {
    const items = [
        {
            name: "rename",
            handler: () => {
                console.log("rename handler called");
                renameHandler();
            },
        },
        {
            name: "duplicate",
            handler: () => {
                console.log("duplicate handler called");
                duplicateHandler();
            },
        },
        {
            name: "remove",
            handler: () => {
                console.log("remove handler called");
                removeHandler();
            },
        },
    ];
    const entry = (
        <ApplyContextMenu items={items}>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={(event) => {
                        onClickHandler();
                    }}
                >
                    <ListItemIcon>{isFolder ? <FolderIcon /> : <InsertDriveFileIcon />}</ListItemIcon>
                    <ListItemText
                        draggable={true}
                        onDragStart={(event) => {
                            event.dataTransfer.setData("data", JSON.stringify({ name: entryName })); // data has to be string
                            onDragHandler();
                        }}
                        primary={entryName}
                    />
                </ListItemButton>
            </ListItem>
        </ApplyContextMenu>
    );
    return isFolder ? <ApplyDrop onDropHandler={onDropHandler}>{entry}</ApplyDrop> : entry;
}

function PathEntry({ name, onClickHandler, onDropHandler }) {
    return (
        <ApplyDrop onDropHandler={onDropHandler}>
            <Button size="small" onClick={onClickHandler} sx={{ minWidth: 10 }}>
                {name}
            </Button>
        </ApplyDrop>
    );
}

// 1st level modules

function FolderPath() {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <PathEntry name="hi" />
                <PathEntry name="there" />
            </Breadcrumbs>
            <Divider />
        </>
    );
}

function FolderContent() {
    return (
        <List>
            <ContentEntry isFolder={true} entryName="a folder" />
            <ContentEntry isFolder={false} entryName="a file" />
        </List>
    );
}

function AddEntry() {
    const actions = [
        { icon: <InsertDriveFileIcon />, name: "new file" },
        { icon: <FolderIcon />, name: "new folder" },
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

function FolderView({ onFileClick }) {
    const [currentFolderHandle, setCurrentFolderHandle] = useState();
    function showFolderView(folderHandle) {
        setCurrentFolderHandle(folderHandle);
        console.log(folderHandle.name);
    }
    return (
        <CurFolderContext.Provider value={{ currentFolderHandle, showFolderView }}>
            <FolderPath />
            <FolderContent />
            <AddEntry />
        </CurFolderContext.Provider>
    );
}

export default FolderView;
