import Test from "./Test";

export default function App() {
    switch (window.location.pathname) {
        case "/test":
            return <Test />;
        default:
            return "Hi";
    }
}
