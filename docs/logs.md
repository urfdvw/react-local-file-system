# Detect Folder Disconnection
- `directoryReady` is not bound to any action listener.
    - Instead, it is changed by constantly checking `rootDirHandle`.
- `rootDirHandle` needs to be in the `useEffect` list to refresh the function handle.
    - This is because the state `rootDirHandle` is invoked directly.
- Whether connected or not is detected by attempting to iterate through the directory.

# select logic
- select logic should be part of the folder tree component
    - not the useFileSystem hook