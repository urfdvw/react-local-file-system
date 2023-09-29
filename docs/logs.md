# Detect Folder Disconnection
- `directoryReady` is not bound to any action listener.
    - Instead, it is changed by constantly checking `rootDirHandle`.
- `rootDirHandle` needs to be in the `useEffect` list to refresh the function handle.
    - This is because the state `rootDirHandle` is invoked directly.
- Whether connected or not is detected by attempting to iterate through the directory.

# select logic
- select logic should be part of the folder tree component
    - not the useFileSystem hook

# parent of file handle
- looks like this is not a easy thing
    - this is not very critical if not offered as a util function
    - this can be implemented as a function when the folder tree is constructed

# folder tree
- looks like helpful, but might not be a good idea as part of the hook
    - will be a good idea as a part of the folder tree component.
- `folderHandle.values()` is better than `folderHandle.entrys()` as it returns a obj not list

# gh-page 
- added `npm install gh-pages`
- added `base: "./",` (must have to have GH page to work)

# using single page build 
- to test out what can be used in single page

# checking existence
- folder existence is not checked, as dealt in `path2FolderHandles`
    - recreating existing folder is not fatal 
- file existence is checked and generating alert
- no need to alert on addNewFile, as not overwriting data
    - if exists, just return handle of existing file

# TODO
- change tests to new orders
- file name confiliction detect