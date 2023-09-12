import { useEffect, useState } from "react";
import useFileSystem from "./useFileSystem";

export default function App() {
    const {
        openDirectory,
        selectedHandle,
        directoryReady,
        readFile,
        readDir,
        writeFile,
    } = useFileSystem();
    return (
        <div className="App">
            <br />
            <button onClick={openDirectory}>Open Dir</button>
            <p>
                {selectedHandle ? selectedHandle.name : "[no selected handle]"}
            </p>
            <p>{directoryReady ? "Dir ready" : "Dir not ready"}</p>
        </div>
    );
}
