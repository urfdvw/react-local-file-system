import { useEffect, useState } from "react";

const useFileSystem = () => {
    const [rootDirHandle, setRootDirHandle] = useState(null);
    const [directoryReady, setDirectoryReady] = useState(false);
    const [statusText, setStatusText] = useState("");

    // indicators ====================================

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

    // Open dir ========================================
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

    // file level ====================================
    
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

    // folder level ================================

    // Read -------------------------------

    async function getFolderContent(folderHandle) {
        const layer = [];
        for await (const entry of await folderHandle.values()) {
            layer.push(entry);
        }
        return layer;
    }

    async function getFolderTree(folderHandle) {
        var out = [];
        for (const entry of await getFolderContent(folderHandle)) {
            out.push({
                parent: folderHandle,
                handle: entry,
                children: (await isFolder(entry)) ? await getFolderTree(entry) : null,
            });
        }
        return out;
    }

    // Create -------------------------------------

    async function addNewFolder(folderHandle, newFolderName) {
        return await addNewEntry(folderHandle, newFolderName, "directory");
    }

    async function addNewFile(folderHandle, newFileName) {
        return await addNewEntry(folderHandle, newFileName, "file");
    }

    async function addNewEntry(folderHandle, newEntryName, kind) {
        var newEntryHandle;
        try {
            if (kind === "file") {
                newEntryHandle = await folderHandle.getFileHandle(newEntryName);
            } else {
                newEntryHandle = await folderHandle.getDirectoryHandle(newEntryName);
            }
            alert(newEntryName + " already exists");
            return newEntryHandle;
        } catch {
            console.log(newEntryName + " does not exist, creating");
            if (kind === "file") {
                newEntryHandle = await folderHandle.getFileHandle(newEntryName, {
                    create: true,
                });
            } else {
                newEntryHandle = await folderHandle.getDirectoryHandle(newEntryName, {
                    create: true,
                });
            }
            return newEntryHandle;
        }
    }

    async function addRandomFolderTree(folderHandle, numLayers, numEntries) {
        // this function is mostly for testing
        var layerFolders = [folderHandle];
        for (let layerIndex = 0; layerIndex < numLayers; layerIndex++) {
            const nextLayerFolder = [];
            for (const curFolderHandle of layerFolders) {
                for (let entryIndex = 0; entryIndex < numEntries; entryIndex++) {
                    const randomNumber = Math.random();
                    if (randomNumber < 0.7) {
                        // make folder
                        nextLayerFolder.push(await addNewFolder(curFolderHandle, String(randomNumber)));
                    } else {
                        await addNewFile(curFolderHandle, String(randomNumber));
                    }
                }
            }
            layerFolders = nextLayerFolder;
        }
    }

    // Delete -----------------------------------------

    async function removeEntry(parentHandle, entryHandle) {
        // Will not work without https
        if (await isFolder(entryHandle)) {
            await _removeFolder(parentHandle, entryHandle);
        } else {
            await _removeFile(parentHandle, entryHandle);
        }
    }

    async function _removeFolder(parentHandle, folderHandle) {
        for (const entry of await getFolderContent(folderHandle)) {
            await removeEntry(folderHandle, entry);
        }
        await parentHandle.removeEntry(folderHandle.name);
    }

    async function _removeFile(parentHandle, fileHandle) {
        await parentHandle.removeEntry(fileHandle.name);
    }

    // Copy --------------------------------------

    async function copyEntry(entryHandle, newName) {

    }

    // Compound (Copy then Delete) ----------------------------------

    async function renameEntry(entryHandle) {
        // TODO
    }

    async function moveEntry(entryHandle, fromFolderHandle, toFolderHandle) {
        // TODO
    }

    // Trash bin ----------------------------------

    async function moveToTrash(entryHandle) {
        // TODO
    }

    async function recoverFromTrash(entryHandle) {
        // TODO
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

    async function isFolder(entryHandle) {
        return entryHandle.kind === "directory";
    }

    return {
        directoryReady,
        statusText,
        openDirectory,
        getFolderContent,
        getFileText,
        getFolderTree,
        addNewFolder,
        addNewFile,
        addRandomFolderTree,
        writeFileText,
        removeEntry,
        path2Handles,
        isFolder,
    };
};

export default useFileSystem;
