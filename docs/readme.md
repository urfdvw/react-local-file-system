# Design
Attribuits
- directoryReady
- statusText
Methods
- open directory (did)
- get folder tree of the open directory
- select dir/file
- add
    - add new file to selected directory
    - add new folder to selected directory
- delete
    - delete selected file
    - delete selected folder
- update
    - write text to selected file
    - move selected file to a new folder
    - rename selected file
    - rename selected directory
- read
    - read text from selected file

Over head file
- sync one directory to another

# Features that need https
- remove file/folder
    - actually this feature can be used with stand alone file build
    - not sure why it is different from the document

# alert level
- throw error
    - only when this stops the whole UI from working
- console.error
    - when some UI feature code cannot finish as expected
- confirm
    - when the operation is not revertible
    - situations
        - delete
- alert
    - when the operation is going to change the data as a side effect
    - should stop the code from going forward
    - situations
        - move file
        - rename file


# Note

[Adafruit's code](https://github.com/circuitpython/web-editor/blob/main/js/common/usb-file-transfer.js)
have some issues about logic separation.
They mixed serial connection code with file logic code in multiple locations.
This has issue that
- there could be situations that only file operations are needed
    - such as quick code changes
- this is slowing things down dramatically
    - file operations are ususally very quick as processed by computer
        - while serial communication need to wait for microcontroller to respond
- plus this is not easy to maintain
    - hard to locate error
    - hard to expand functionality
    