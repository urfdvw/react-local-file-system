import Test from "./Test";
import FolderView from "./FolderView";
import useFileSystem from "./useFileSystem";
import { getFileText } from "./fileSystemUtils";
import { useEffect, useState } from "react";

export default function App() {
    const { openDirectory, directoryReady, statusText, path2FolderHandles } = useFileSystem();
    const [rootFolder, setRootFolder] = useState();
    useEffect(() => {
        async function setRoot() {
            const root = await path2FolderHandles("");
            setRootFolder(root);
        }
        if (!rootFolder) {
            setRoot();
        }
    }, [directoryReady]);

    // route
    if (window.location.pathname === "/test") {
        return <Test />;
    }

    async function onFileClick(fileHandle) {
        console.log("file content of", fileHandle.name, ":", await getFileText(fileHandle));
    }

    async function onOpenHandler() {
        await openDirectory();
    }

    return (
        <>
            <button onClick={onOpenHandler}>Open Dir</button>
            <br />
            {directoryReady && rootFolder ? (
                <FolderView rootFolder={rootFolder} onFileClick={onFileClick} />
            ) : (
                statusText
            )}
        </>
    );
}
