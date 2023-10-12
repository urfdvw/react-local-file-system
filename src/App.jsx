import Test from "./Test";
import FolderView from "./FolderView";
import useFileSystem from "./useFileSystem";
import { getFileText } from "./fileSystemUtils";

export default function App() {
    if (window.location.pathname === "/test") {
        return <Test />;
    }
    const { openDirectory, directoryReady, statusText, path2FolderHandles } = useFileSystem();

    async function onFileClick(fileHandle) {
        console.log(await getFileText(fileHandle));
    }

    return (
        <>
            <button onClick={openDirectory}>Open Dir</button>
            <br />
            {directoryReady ? (
                <FolderView path2FolderHandles={path2FolderHandles} onFileClick={onFileClick} />
            ) : (
                statusText
            )}
        </>
    );
}
