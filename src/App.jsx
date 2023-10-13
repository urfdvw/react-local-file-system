import Test from "./Test";
import FolderView from "./FolderView";
import useFileSystem from "./useFileSystem";
import { getFileText } from "./fileSystemUtils";
import { useState } from "react";

export default function App() {
    if (window.location.pathname === "/test") {
        return <Test />;
    }
    const { openDirectory, directoryReady, statusText, path2FolderHandles } = useFileSystem();
    const [rootFolder, setRootFolder] = useState();

    async function onFileClick(fileHandle) {
        console.log(await getFileText(fileHandle));
    }

    async function onOpenHandler() {
        await openDirectory();
    }

    async function setRoot() {
        // TODO: make this part of the open action
        const root = await path2FolderHandles("");
        console.log(root);
        setRootFolder(root);
    }

    return (
        <>
            <button onClick={onOpenHandler}>Open Dir</button>
            <button onClick={setRoot}>Set root</button>
            <br />
            {directoryReady && rootFolder ? (
                <FolderView rootFolder={rootFolder} onFileClick={onFileClick} />
            ) : (
                statusText
            )}
        </>
    );
}
