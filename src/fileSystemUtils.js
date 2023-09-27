// file level ====================================

export async function writeFileText(fileHandle, text) {
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

export async function getFileText(fileHandle) {
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

export async function getFolderContent(folderHandle) {
    const layer = [];
    for await (const entry of await folderHandle.values()) {
        layer.push(entry);
    }
    return layer;
}

export async function getFolderTree(folderHandle) {
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

export async function addNewFolder(folderHandle, newFolderName) {
    return await _addNewEntry(folderHandle, newFolderName, "directory");
}

export async function addNewFile(folderHandle, newFileName) {
    return await _addNewEntry(folderHandle, newFileName, "file");
}

export async function _addNewEntry(folderHandle, newEntryName, kind) {
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

export async function addRandomFolderTree(folderHandle, numLayers, numEntries) {
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

export async function removeEntry(parentHandle, entryHandle) {
    // Will not work without https
    if (await isFolder(entryHandle)) {
        await _removeFolder(parentHandle, entryHandle);
    } else {
        await _removeFile(parentHandle, entryHandle);
    }
}

export async function _removeFolder(parentHandle, folderHandle) {
    for (const entry of await getFolderContent(folderHandle)) {
        await removeEntry(folderHandle, entry);
    }
    await parentHandle.removeEntry(folderHandle.name);
}

export async function _removeFile(parentHandle, fileHandle) {
    await parentHandle.removeEntry(fileHandle.name);
}

// Copy --------------------------------------

export async function copyEntry(entryHandle, targetFolderHandle, newName) {
    if (await isFolder(entryHandle)) {
        await _copyFolder(entryHandle, targetFolderHandle, newName);
    } else {
        await _copyFile(entryHandle, targetFolderHandle, newName);
    }
}

export async function _copyFolder(folderHandle, targetFolderHandle, newName) {
    // TODO
}

async function _copyFile(fileHandle, targetFolderHandle, newName) {
    const fileData = await fileHandle.getFile();
    const newFileHandle = await addNewFile(targetFolderHandle, newName);
    const writable = await newFileHandle.createWritable();
    await writable.write(fileData);
    await writable.close();
}

// Compound (Copy then Delete) ----------------------------------

export async function renameEntry(entryHandle) {
    // TODO
}

export async function moveEntry(entryHandle, fromFolderHandle, toFolderHandle) {
    // TODO
}

// Trash bin ----------------------------------

export async function moveToTrash(entryHandle) {
    // TODO
}

export async function recoverFromTrash(entryHandle) {
    // TODO
}

// Utils ==========================================

export async function isFolder(entryHandle) {
    return entryHandle.kind === "directory";
}
