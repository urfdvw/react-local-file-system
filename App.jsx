import FolderView, { useFileSystem, getFileText } from "react-local-file-system";

export default function App() {
    // get folder handler and status with useFileSystem hook
    const { openDirectory, directoryReady, statusText, rootDirHandle } = useFileSystem();
    // example onFileClick handler
    async function onFileClick(fileHandle) {
        console.log("file content of", fileHandle.name, ":", await getFileText(fileHandle));
    }
    // Show FolderView component only when its ready
    return directoryReady ? (
        <FolderView rootFolder={rootDirHandle} onFileClick={onFileClick} />
    ) : (
        <>
            <button onClick={openDirectory}>Open Dir</button>
            <p>{statusText}</p>
        </>
    );
}