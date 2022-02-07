const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    target: "node",
    devtool: 'source-map',
    entry: {
        server: "./server/index.ts",
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@/components": path.resolve(__dirname, "src/components"),
            "@/pages": path.resolve(__dirname, "src/pages"),
            "@/config": path.resolve(__dirname, "src/config"),
            "@/game": path.resolve(__dirname, "src/game"),
            "@/services": path.resolve(__dirname, "src/services"),
            "@/api": path.resolve(__dirname, "src/api"),
            "@/helpers": path.resolve(__dirname, "src/helpers"),
            "@/store": path.resolve(__dirname, "src/store"),
            "@/reducers": path.resolve(__dirname, "src/reducers"),
            "@/actions": path.resolve(__dirname, "src/actions"),
        },
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
        } 
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            ignoreDiagnostics: [2339],
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
};