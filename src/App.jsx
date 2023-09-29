import useFileSystem from "./useFileSystem";
import {
    getFolderContent,
    getFileText,
    getFolderTree,
    addNewFolder,
    addNewFile,
    addRandomFolderTree,
    writeFileText,
    copyEntry,
    removeEntry,
    isFolder,
} from "./fileSystemUtils";

export default function App() {
    const { openDirectory, directoryReady, statusText, path2FolderHandles } = useFileSystem();

    return (
        <div className="App">
            <h2>Test useFileSystem features</h2>
            <button onClick={openDirectory}>Open Dir</button>
            <p>statusText: {statusText}</p>
            <p>directoryReady: {directoryReady ? "True" : "False"}</p>

            <button
                onClick={async () => {
                    console.log("=== Test path2FolderHandles() ===");
                    console.log("root folder handle, empty string:", await path2FolderHandles(""));
                    console.log("root folder handle, '/':", await path2FolderHandles("/"));
                    console.log("non-exist folder handle:", await path2FolderHandles("grand_parent/parent"));
                    console.log("non-exist folder handle, create:", await path2FolderHandles("grand_parent/parent", true));
                    console.log("now existing folder handle:", await path2FolderHandles("grand_parent/parent"));
                }}
            >
                Run Test
            </button>

            <h2>Basic reading tests</h2>
            <p>Need a folder called `test_dir` that has a file called `test_file` with content `test_text`</p>
            <p>Results in the browser console</p>
            <button
                onClick={async () => {
                    const { curDirectoryHandle: curDirectoryHandleRoot, fileHandle: fileHandleRoot } =
                        await path2FolderHandles("/");
                    console.log("curDirectoryHandleRoot: ", curDirectoryHandleRoot);
                    console.log("fileHandleRoot: ", fileHandleRoot);

                    console.log("=== Test getFolderContent() on root folder ===");
                    console.log(await getFolderContent(curDirectoryHandleRoot));

                    const { curDirectoryHandle: curDirectoryHandleTestFile, fileHandle: fileHandleTestFile } =
                        await path2FolderHandles("/test_file");
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
                    const { curDirectoryHandle: rootDirectoryHandle, fileHandle: rawFileHandle } =
                        await path2FolderHandles("/test_raw.mpy");
                    const { curDirectoryHandle: rootDirectoryHandleDuplicated, fileHandle: textFileHandle } =
                        await path2FolderHandles("/test_file");

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
                    await addRandomFolderTree(newFolder, 2, 5);
                    console.log(await getFolderTree(newFolder));
                    await removeEntry(rootDirectoryHandle, newFolder);
                    console.log(await getFolderTree(rootDirectoryHandle));

                    console.log("=== Test copyEntry ===");
                    await copyEntry(rawFileHandle, rootDirectoryHandle, "copied_raw.mpy");
                    await copyEntry(textFileHandle, rootDirectoryHandle, "copied_text");
                }}
            >
                Run Test
            </button>
        </div>
    );
}
