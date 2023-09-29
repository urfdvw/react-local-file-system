import { useEffect, useState } from "react";

const useFileSystem = () => {
    const [rootDirHandle, setRootDirHandle] = useState(null);
    const [directoryReady, setDirectoryReady] = useState(false);
    const [statusText, setStatusText] = useState("");

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

    // Open dir
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

    // Get Handles under root
    async function path2FolderHandles(path = "", create = false) {
        // change windows path to the world standard
        path.replace("\\", "/");
        // split path to levels
        const levels = path.split("/").map((level) => level.trim());
        // get dir handle
        let folderHandle = rootDirHandle;
        for (const level of levels) {
            if (level.length !== 0) {
                try {
                    folderHandle = await folderHandle.getDirectoryHandle(level, { create: create });
                } catch {
                    // if not found
                    alert(path + "does not exist");
                    return;
                }
            }
        }
        return folderHandle;
    }

    return {
        openDirectory,
        directoryReady,
        statusText,
        path2FolderHandles,
    };
};

export default useFileSystem;
