import { useEffect, useState } from "react";

const useFileSystem = () => {
    const [rootDirHandle, setRootDirHandle] = useState(null);
    const [directoryReady, setDirectoryReady] = useState(false);
    const [statusText, setStatusText] = useState("");

    // indicators -------------------------

    // directoryReady
    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                // eslint-disable-next-line no-unused-vars
                for await (const [key, value] of rootDirHandle.entries()) {
                    break;
                }
                setDirectoryReady(true);
            } catch {
                setDirectoryReady(false);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [rootDirHandle]);

    // statusText
    useEffect(() => {
        setStatusText(() => {
            if (!directoryReady) {
                return "No Directory Connected!";
            } else {
                const info = " connected to " + rootDirHandle.name;
                return info;
            }
        });
    }, [rootDirHandle, directoryReady]);

    async function openDirectory() {
        try {
            const dirHandle = await window.showDirectoryPicker({
                mode: "readwrite",
            });
            if (dirHandle) {
                console.log("Directory handle opened.");
                setRootDirHandle(dirHandle);
            } else {
                throw new Error("Failed to open directory handle. `dirHandle` created but empty"); // not sure wether this is reachiable
            }
        } catch (error) {
            alert(error);
            console.error(error);
        }
    }

    // Create -------------------------------------

    async function addNewFolder(folderHandle, newFolderName) {
        return await addNewItem(folderHandle, newFolderName, "directory");
    }

    async function addNewFile(folderHandle, newFileName) {
        return await addNewItem(folderHandle, newFileName, "file");
    }

    async function addNewItem(folderHandle, newItemName, kind) {
        var newItemHandle;
        try {
            if (kind === "file") {
                newItemHandle = await folderHandle.getFileHandle(newItemName);
            } else {
                newItemHandle = await folderHandle.getDirectoryHandle(newItemName);
            }
            alert(newItemName + " already exists");
            return newItemHandle;
        } catch {
            console.log(newItemName + " does not exist, creating");
            if (kind === "file") {
                newItemHandle = await folderHandle.getFileHandle(newItemName, {
                    create: true,
                });
            } else {
                newItemHandle = await folderHandle.getDirectoryHandle(newItemName, {
                    create: true,
                });
            }
            return newItemHandle;
        }
    }

    // Remove

    async function removeItem(itemHandle) {
        // TODO
        if (isFolder(itemHandle)) {
            _removeFolder(itemHandle);
        } else {
            _removeFile(itemHandle);
        }
    }

    async function _removeFolder(folderHandle) {}

    async function _removeFile(fileHandle) {}

    // update

    async function writeFileText(fileHandle, text) {
        try {
            // Create a FileSystemWritableFileStream to write to.
            const writable = await fileHandle.createWritable();
            // Write the contents of the file to the stream.
            await writable.write(text);
            // Close the file and write the contents to disk.
            await writable.close();
            console.log("Successfully wrote to", fileHandle.name);
        } catch (error) {
            console.error(error);
        }
    }

    async function renameItem(itemHandle) {
        // TODO
    }

    async function moveItem(itemHandle, fromFolderHandle, toFolderHandle) {
        // TODO
    }

    // Read -------------------------------
    async function getFolderContent(folderHandle) {
        const layer = [];
        for await (const entry of await folderHandle.values()) {
            layer.push(entry);
        }
        return layer;
    }

    async function getFileText(fileHandle) {
        try {
            const file = await fileHandle.getFile();
            const contents = await file.text();
            return String(contents);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async function getFolderTree() {
        // Backlogged
    }

    // Util ----------------------------

    async function path2Handles(path, opt) {
        if (!opt) {
            opt = {};
        }
        // change windows path to the world standard
        path.replace("\\", "/");
        // split path to levels
        const levels = path.split("/").map((l) => l.trim());
        // get dir handle
        let curDirectoryHandle = rootDirHandle;
        for (const l of levels.slice(0, -1)) {
            if (l) {
                console.log("l", [l]);
                curDirectoryHandle = await curDirectoryHandle.getDirectoryHandle(l);
            }
        }
        // get file handle
        const fileHandle = levels.at(-1) === "" ? null : await curDirectoryHandle.getFileHandle(levels.at(-1), opt);
        return { curDirectoryHandle, fileHandle };
    }

    async function isFolder(itemHandle) {
        return itemHandle.kind === "directory";
    }

    return {
        directoryReady,
        statusText,
        openDirectory,
        getFolderContent,
        getFileText,
        addNewFolder,
        addNewFile,
        writeFileText,
        path2Handles,
        isFolder,
    };
};

export default useFileSystem;
