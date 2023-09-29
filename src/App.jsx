import useFileSystem from "./useFileSystem";
import {
    writeFileText,
    getFileText,
    isFolder,
    isEntryHealthy,
    getFolderContent,
    getFolderTree,
    checkFileExists,
    addNewFolder,
    addNewFile,
    addRandomFolderTree,
    removeEntry,
    cleanFolder,
    copyEntry,
    backupFolder,
} from "./fileSystemUtils";

export default function App() {
    const { openDirectory, directoryReady, statusText, path2FolderHandles } = useFileSystem();
    const {
        openDirectory: openDirectoryBackup,
        statusText: statusTextBackup,
        path2FolderHandles: path2FolderHandlesBackup,
    } = useFileSystem();

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
                    console.log(
                        "non-exist folder handle:, should be undefined",
                        await path2FolderHandles("test_dir/test_sub_dir")
                    );
                    console.log(
                        "non-exist folder handle, create:",
                        await path2FolderHandles("test_dir/test_sub_dir", true)
                    );
                    console.log("now existing folder handle:", await path2FolderHandles("test_dir/test_sub_dir"));
                }}
            >
                Run Tests
            </button>

            <h2>Test file level utils</h2>
            <button
                onClick={async () => {
                    const rootHandle = await path2FolderHandles("/");
                    const testFileHandle = await rootHandle.getFileHandle("test_file", { create: true }); // addNewFile not tested

                    console.log("=== Test writeFileText ===");
                    await writeFileText(testFileHandle, "test_text");

                    console.log("=== Test getFileText ===");
                    console.log("file text, should be `test_text`:", await getFileText(testFileHandle));
                }}
            >
                Run Tests
            </button>

            <h2>Test folder level utils</h2>

            <h3>Test read utils</h3>
            <button
                onClick={async () => {
                    const testFileName = "test_file";
                    const rootHandle = await path2FolderHandles("/");
                    const testFileHandle = await rootHandle.getFileHandle(testFileName);

                    console.log("=== Test getFolderContent() on root folder ===");
                    console.log(await getFolderContent(rootHandle));

                    console.log("=== Test getFolderTree ===");
                    console.log(await getFolderTree(rootHandle));

                    console.log("=== Test isFolder() ===");
                    console.log("from test_dir: ", await isFolder(rootHandle));
                    console.log("from test_file: ", await isFolder(testFileHandle));

                    console.log("=== Test checking file existence ===");
                    console.log("should be true", await checkFileExists(rootHandle, testFileName));
                    console.log("should be false", await checkFileExists(rootHandle, "non_existing_" + testFileName));
                }}
            >
                Run Tests
            </button>

            <h3>Test add and remove utils</h3>
            <button
                onClick={async () => {
                    const rootDirectoryHandle = await path2FolderHandles("");

                    console.log("=== Test addNew ===");
                    const newFolder = await addNewFolder(rootDirectoryHandle, "test_new_folder", { create: true });
                    console.log("root content after creation:", await getFolderContent(rootDirectoryHandle));
                    const newFile = await addNewFile(newFolder, "test_new_file");
                    console.log("new folder content after creation:", await getFolderContent(newFolder));

                    console.log("=== Test newFile ===");
                    await writeFileText(newFile, "new_test_text");
                    console.log(await getFileText(newFile));

                    console.log("=== Test remove file ===");
                    console.log("file healthy:", await isEntryHealthy(newFile));
                    console.log("new folder content after rejecting removing file:", await getFolderContent(newFolder));
                    await removeEntry(newFolder, newFile);
                    console.log("new folder content after removing file:", await getFolderContent(newFolder));
                    console.log("file healthy:", await isEntryHealthy(newFile));

                    console.log("=== Test addRandomFolderTree ===");
                    await addRandomFolderTree(newFolder, 2, 5);
                    console.log(await getFolderTree(newFolder));
                    await removeEntry(rootDirectoryHandle, newFolder);
                    console.log(await getFolderTree(rootDirectoryHandle));
                }}
            >
                Run Test
            </button>

            <h3>Test Copy utils</h3>
            <button
                onClick={async () => {
                    const rootDirectoryHandle = await path2FolderHandles("");
                    const textFileHandle = await rootDirectoryHandle.getFileHandle("test_file");

                    console.log("=== Test copyEntry ===");
                    await copyEntry(textFileHandle, rootDirectoryHandle, "copied_text");
                    console.log(await getFolderContent(rootDirectoryHandle));
                    const testFolderHandle = await addNewFolder(rootDirectoryHandle, "original tree");
                    await addRandomFolderTree(testFolderHandle, 2, 5);
                    const copiedHandle = await copyEntry(testFolderHandle, rootDirectoryHandle, "copied tree");
                    console.log("original:", await getFolderTree(testFolderHandle));
                    console.log("copied:", await getFolderTree(copiedHandle));
                }}
            >
                Run Test
            </button>

            <h3>Test Backup folder</h3>
            <button onClick={openDirectoryBackup}>Open Backup Dir</button>
            <p>statusText: {statusTextBackup}</p>
            <button
                onClick={async () => {
                    const rootDirectoryHandle = await path2FolderHandles("");
                    const backupDirectoryHandle = await path2FolderHandlesBackup("");
                    await backupFolder(rootDirectoryHandle, backupDirectoryHandle);
                    console.log("original:", await getFolderTree(rootDirectoryHandle));
                    console.log("copied:", await getFolderTree(backupDirectoryHandle));
                }}
            >
                Run Test
            </button>

            <h3>Test Clean all</h3>
            <button
                onClick={async () => {
                    const rootDirectoryHandle = await path2FolderHandles("");
                    await cleanFolder(rootDirectoryHandle);
                    console.log("root:", await getFolderTree(rootDirectoryHandle));
                }}
            >
                Run Test
            </button>
        </div>
    );
}
