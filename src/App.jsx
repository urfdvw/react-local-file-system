import FolderView from "./lib/FolderView"; // the FolderView component
import useFileSystem from "./lib/useFileSystem"; // the hook handling connections to the directory
import { getFileText } from "./lib/fileSystemUtils"; // file system api wrappers for manipulating files
import Test from "./Test"; // testing page

export default function App() {
    // get folder handler and status with useFileSystem hook
    const { openDirectory, directoryReady, statusText, rootDirHandle } = useFileSystem();
    // route to test page
    if (window.location.pathname === "/test") {
        return <Test />;
    }
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
