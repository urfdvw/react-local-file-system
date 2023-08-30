import { useEffect, useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <button
                onClick={() => {
                    setCount((cur_count) => cur_count + 1);
                }}
            >
                count: {count}
            </button>
        </div>
    );
}
