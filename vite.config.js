import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve("src", "react-local-file-system/index.jsx"),
            name: "react-local-file-system",
            fileName: (format) => `react-local-file-system.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    },
    plugins: [react()],
});
