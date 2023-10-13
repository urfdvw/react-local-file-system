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
- remove functions using handles not names, so don't need to alert on missing
- let app level, not util level, worry about the alerts when danger actions happen

# trash bin features
- should be part of the hook, as need file structure.
- also, backlogged

# project structure
- Prepare for the folder view Component
- Use basic routing via "window.location.pathname"
- changed the connection message to include "connection lost info"

# error happens when removing non empty folder
- only happens on the micro controller drive
- mostly because mac file '._*'
- solution, remove the . files first before remove the rest