import useFileSystem from "./useFileSystem";

export default function App() {
    const {
        directoryReady,
        statusText,
        openDirectory,
        getFolderContent,
        getFileText,
        getFolderTree,
        addNewFolder,
        addNewFile,
        addRandomFolderTree,
        writeFileText,
        removeEntry,
        path2Handles,
        isFolder,
    } = useFileSystem();

    return (
        <div className="App">
            <h2>Open dir</h2>
            <button onClick={openDirectory}>Open Dir</button>
            <p>statusText: {statusText}</p>
            <p>directoryReady: {directoryReady ? "True" : "False"}</p>
            <h2>Basic reading tests</h2>
            <p>Need a folder called `test_dir` that has a file called `test_file` with content `test_text`</p>
            <p>Results in the browser console</p>
            <button
                onClick={async () => {
                    console.log("=== Test path2Handles() on root folder ===");
                    const { curDirectoryHandle: curDirectoryHandleRoot, fileHandle: fileHandleRoot } =
                        await path2Handles("/");
                    console.log("curDirectoryHandleRoot: ", curDirectoryHandleRoot);
                    console.log("fileHandleRoot: ", fileHandleRoot);

                    console.log("=== Test getFolderContent() on root folder ===");
                    console.log(await getFolderContent(curDirectoryHandleRoot));

                    console.log("=== Test path2Handles() on file ===");
                    const { curDirectoryHandle: curDirectoryHandleTestFile, fileHandle: fileHandleTestFile } =
                        await path2Handles("/test_file");
                    console.log("curDirectoryHandle: ", curDirectoryHandleTestFile);
                    console.log("fileHandle: ", fileHandleTestFile);

                    console.log("=== Test getFileText() on file ===");
                    const testFileText = await getFileText(fileHandleTestFile);
                    console.log("testFileText: ", testFileText);

                    console.log("=== Test isFolder() ===");
                    console.log("from test_dir: ", await isFolder(curDirectoryHandleTestFile));
                    console.log("from test_file: ", await isFolder(fileHandleTestFile));
                }}
            >
                Run Test
            </button>
            <h2>Other tests</h2>
            <p>Once basic reading is reliable, other features can be tested. </p>
            <p>Results in the browser console</p>
            <button
                onClick={async () => {
                    const { curDirectoryHandle: rootDirectoryHandle, fileHandle: nullFile } = await path2Handles("/");

                    console.log("=== Test addNew ===");
                    const newFolder = await addNewFolder(rootDirectoryHandle, "test_new_folder");
                    console.log("root content after creation:", await getFolderContent(rootDirectoryHandle));
                    const newFile = await addNewFile(newFolder, "test_new_file");
                    console.log("new folder content after creation:", await getFolderContent(newFolder));

                    console.log("=== Test newFile ===");
                    await writeFileText(newFile, "new_test_text");
                    console.log(await getFileText(newFile));

                    console.log("=== Test getFolderTree ===");
                    console.log(await getFolderTree(rootDirectoryHandle));

                    console.log("=== Test remove file ===");
                    await removeEntry(newFolder, newFile);
                    console.log("new folder content after removing file:", await getFolderContent(newFolder));

                    console.log("=== Test addRandomFolderTree ===");
                    addRandomFolderTree(newFolder, 2, 5);
                }}
            >
                Run Test
            </button>
        </div>
    );
}
