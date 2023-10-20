import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <dir
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
            }}
        >
            <App />
        </dir>
    </React.StrictMode>
);
