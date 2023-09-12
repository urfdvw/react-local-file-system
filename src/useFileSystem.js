import { useEffect, useState } from "react";

const useFileSystem = () => {
    const [rootDirHandle, setRootDirHandle] = useState(null);
    const [directoryReady, setDirectoryReady] = useState(false);
    const [selectedHandle, setSelectedHandle] = useState(null);

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                for await (const [key, value] of rootDirHandle.entries()) {
                    break
                }
                setDirectoryReady(true);
            } catch {
                console.log("Dir not ready");
                setDirectoryReady(false);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [rootDirHandle]);

    async function openDirectory() {
        try {
            const dirHandle = await window.showDirectoryPicker({
                mode: "readwrite",
            });
            if (dirHandle) {
                console.log("Directory handle opened.");
                setRootDirHandle(dirHandle);
                setSelectedHandle(dirHandle);
            } else {
                throw new Error(
                    "Failed to open directory handle. `dirHandle` created but empty"
                ); // not sure wether this is reachiable
            }
        } catch (error) {
            alert(error);
            console.error(error);
        }
    }

    async function fileHandle2text(fileHandle) {
        try {
            const file = await fileHandle.getFile();
            const contents = await file.text();
            return String(contents);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

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
            console.log("l", [l]);
            curDirectoryHandle = await curDirectoryHandle.getDirectoryHandle(l);
        }
        // get file handle
        const fileHandle =
            levels.at(-1) === ""
                ? null
                : await curDirectoryHandle.getFileHandle(levels.at(-1), opt);
        return [curDirectoryHandle, fileHandle];
    }

    async function readFile(path, opt) {
        try {
            const [curDirectoryHandle, fileHandle] = await path2Handles(
                path,
                opt
            );
            console.log(path, "found");
            return fileHandle2text(fileHandle);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async function readDir(path) {
        try {
            const [curDirectoryHandle, fileHandle] = await path2Handles(path);
            console.log(path, "found");
            return await curDirectoryHandle.entries();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async function writeFile(path, text) {
        try {
            const [curDirectoryHandle, fileHandle] = await path2Handles(path, {
                create: true,
            });
            // Create a FileSystemWritableFileStream to write to.
            const writable = await fileHandle.createWritable();
            // Write the contents of the file to the stream.
            await writable.write(text);
            // Close the file and write the contents to disk.
            await writable.close();
            console.log("Successfully wrote to", path);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        openDirectory,
        selectedHandle,
        directoryReady,
        readFile,
        readDir,
        writeFile,
    };
};

export default useFileSystem;
