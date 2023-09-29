// file level ====================================

export async function writeFileText(fileHandle, text) {
    // Create a FileSystemWritableFileStream to write to.
    const writable = await fileHandle.createWritable();
    // Write the contents of the file to the stream.
    await writable.write(text);
    // Close the file and write the contents to disk.
    await writable.close();
    console.log("Successfully wrote to", fileHandle.name);
}

export async function getFileText(fileHandle) {
    const file = await fileHandle.getFile();
    const contents = await file.text();
    return String(contents);
}

// folder level ================================

// Read -------------------------------

export async function isFolder(entryHandle) {
    return entryHandle.kind === "directory";
}

export async function isEntryHealthy(entryHandle) {
    if (entryHandle === null) {
        return false;
    }
    if (await isFolder(entryHandle)) {
        try {
            // eslint-disable-next-line no-unused-vars
            for await (const [key, value] of entryHandle.entries()) {
                break;
            }
            return true;
        } catch {
            return false;
        }
    } else {
        try {
            await getFileText(entryHandle);
            return true;
        } catch {
            return false;
        }
    }
}

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

export async function checkFileExists(parentHandle, fileName) {
    try {
        await parentHandle.getFileHandle(fileName);
        return true;
    } catch {
        return false;
    }
}

// Create -------------------------------------

export async function addNewFolder(parentHandle, newFolderName) {
    return await parentHandle.getDirectoryHandle(newFolderName, {
        create: true,
    });
}

export async function addNewFile(parentHandle, newFileName) {
    return await parentHandle.getFileHandle(newFileName, {
        create: true,
    });
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

export async function cleanFolder(parentHandle) {
    for (const entry of await getFolderContent(parentHandle)) {
        await removeEntry(parentHandle, entry);
    }
}

export async function _removeFolder(parentHandle, folderHandle) {
    await cleanFolder(folderHandle);
    await parentHandle.removeEntry(folderHandle.name);
}

export async function _removeFile(parentHandle, fileHandle) {
    await parentHandle.removeEntry(fileHandle.name);
}

// Copy --------------------------------------

export async function copyEntry(entryHandle, targetFolderHandle, newName) {
    if (await isFolder(entryHandle)) {
        return await _copyFolder(entryHandle, targetFolderHandle, newName);
    } else {
        return await _copyFile(entryHandle, targetFolderHandle, newName);
    }
}

export async function _copyFolder(folderHandle, targetFolderHandle, newName) {
    const newFolderHandle = await addNewFolder(targetFolderHandle, newName);
    for (const entry of await getFolderContent(folderHandle)) {
        await copyEntry(entry, newFolderHandle, entry.name);
    }
    return newFolderHandle;
}

async function _copyFile(fileHandle, targetFolderHandle, newName) {
    const fileData = await fileHandle.getFile();
    const newFileHandle = await addNewFile(targetFolderHandle, newName);
    const writable = await newFileHandle.createWritable();
    await writable.write(fileData);
    await writable.close();
    return newFileHandle;
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
