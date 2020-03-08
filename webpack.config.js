const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/aicevote.ts",
    output: {
        filename: "aicevote.js",
        path: path.join(__dirname, "dist"),
        library: "aicevote",
        libraryExport: "default",
        libraryTarget: "umd",
        globalObject: "this",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};
