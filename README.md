# react-local-file-system

This package contains tools for your react front end web app to access local files via File System API.
This package only supports Chrome and Chromium-based browsers.

## Install
```
npm i react-local-file-system
```

## Quick setup

The minimal setup to use this package is to utilize the `FolderView` component for general file operations and to create a custom handler function, `onFileClick`, to manage any file click actions. Specifically, the `FolderView` component is used in the UI to access files, accepting a prop named `onFileClick` that takes a single parameter: `fileHandle`. The `onFileClick` function is triggered when a file is clicked in the UI, with `fileHandle` being the file handle of the clicked file.

Code example:

```js
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
```

## Demo
The live demo of the example above is here:
https://urfdvw.github.io/react-local-file-system/

For the code of the live demo, please see the `demo` branch

## Contents

### `FolderView` component
Supported operations
- view
    - click on file to trigger `onFileClick` function
    - click on folder to open
    - click on folder in the path to go back
- context menu
    - rename
    - duplicate
    - remove
- add
    - add new file
    - add new folder
- drag and drop on to folder
    - move file or folder

### `useFileSystem` hook
returned objects
- methods:
    - `openDirectory`: function handle to open a directory, or switch to a new directory
    - `path2FolderHandles`: given a directory path (`string`) return a folder handle
- values:
    - `rootDirHandle`: the folder handle of the opened folder
    - `directoryReady`: `boolean` indicator of whether the folder handles in the hook are ready to be used
    - `statusText`: `string` text indicator of status of the folder handles.

### fileSystem util functions
functions 
- file level
    - `writeFileText(fileHandle, text) -> void`: write text to a file
    - `getFileText(fileHandle) -> string`: read text from a file
- folder level (docs coming, please see source code for help at the moment)

## PeerDependency
```
"@mui/icons-material": "^5.14.13",
"@mui/material": "^5.14.13",
"react": "^18.2.0",
"react-dom": "^18.2.0"
```