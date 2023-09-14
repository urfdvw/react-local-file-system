import useFileSystem from "./useFileSystem";

export default function App() {
    const {
        openDirectory,
        directoryReady,
        statusText,
    } = useFileSystem();
    
    return (
        <div className="App">
            <br />
            <button onClick={openDirectory}>Open Dir</button>
            <p>
                {statusText}
            </p>
            <p>{directoryReady ? "Dir ready" : "Dir not ready"}</p>
        </div>
    );
}
