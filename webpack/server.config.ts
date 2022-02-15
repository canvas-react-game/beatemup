import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import path from "path";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config: Configuration = {
    name: "server",
    target: "node",
    node: { __dirname: false },
    entry: "./src/server/server.ts",
    output: {
        filename: "server.js",
        libraryTarget: "commonjs2",
        path: path.join(__dirname, "../dist"),
        publicPath: "/",
    },
    resolve: {
        modules: ["src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".json", ".ts", ".tsx"],
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
        alias: {
            "@": path.resolve(__dirname, "../src/"),
            "@/components": path.resolve(__dirname, "../src/components"),
            "@/pages": path.resolve(__dirname, "../src/pages"),
            "@/config": path.resolve(__dirname, "../src/config"),
            "@/game": path.resolve(__dirname, "../src/game"),
            "@/services": path.resolve(__dirname, "../src/services"),
            "@/api": path.resolve(__dirname, "../src/api"),
            "@/helpers": path.resolve(__dirname, "../src/helpers"),
            "@/store": path.resolve(__dirname, "../src/store"),
            "@/reducers": path.resolve(__dirname, "../src/reducers"),
            "@/actions": path.resolve(__dirname, "../src/actions"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
            },
        ],
    },

    devtool: "source-map",

    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],

    optimization: { nodeEnv: false },

    plugins: [
        new MiniCssExtractPlugin()
    ]
};

export default config;
