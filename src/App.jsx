import useFileSystem from "./useFileSystem";

export default function App() {
    const {
        directoryReady,
        statusText,
        openDirectory,
        getFolderContent,
        getFileText,
        path2Handles,
        isFolder,
    } = useFileSystem();

    return (
        <div className="App">
            <h2>Open dir</h2>
            <p>
                Need a folder called `test_dir` that has a file called
                `test_file` with content `test_text`
            </p>
            <button onClick={openDirectory}>Open Dir</button>
            <p>statusText: {statusText}</p>
            <p>directoryReady: {directoryReady ? "True" : "False"}</p>
            <h2>Tests</h2>
            <p> Result in the browser console</p>
            <button
                onClick={async () => {
                    console.log("=== Test path2Handles() on root folder ===");
                    const {
                        curDirectoryHandle: curDirectoryHandleRoot,
                        fileHandle: fileHandleRoot,
                    } = await path2Handles("/");
                    console.log(
                        "curDirectoryHandleRoot: ",
                        curDirectoryHandleRoot
                    );
                    console.log("fileHandleRoot: ", fileHandleRoot);

                    console.log(
                        "=== Test getFolderContent() on root folder ==="
                    );
                    console.log(await getFolderContent(curDirectoryHandleRoot));

                    console.log("=== Test path2Handles() on file ===");
                    const {
                        curDirectoryHandle: curDirectoryHandleTestFile,
                        fileHandle: fileHandleTestFile,
                    } = await path2Handles("/test_file");
                    console.log(
                        "curDirectoryHandle: ",
                        curDirectoryHandleTestFile
                    );
                    console.log("fileHandle: ", fileHandleTestFile);

                    console.log("=== Test getFileText() on file ===");
                    const testFileText = await getFileText(fileHandleTestFile);
                    console.log("testFileText: ", testFileText);

                    console.log("=== Test isFolder() on file ===");
                    console.log(
                        "from test_dir: ",
                        await isFolder(curDirectoryHandleTestFile)
                    );
                    console.log(
                        "from test_file: ",
                        await isFolder(fileHandleTestFile)
                    );
                }}
            >
                Start Test
            </button>
        </div>
    );
}
