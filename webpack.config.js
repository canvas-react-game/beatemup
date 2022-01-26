const path = require("path");
const __VERSION__ = require("child_process")
    .execSync("git rev-list HEAD --count")
    .toString();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        bundle: "./src/index.tsx",
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
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./sw.js",
                    to: "./sw.js",
                    transform(content) {
                        let parsed = content.toString();
                        const version = `CACHE_VERSION_${parseInt(
                            __VERSION__
                        )}`;
                        parsed = parsed.replace("CACHE_VERSION", version);
                        return Buffer.from(parsed, "utf8");
                    },
                    force: true,
                },
            ],
        }),
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'assets'),
        },
        historyApiFallback: true,
        compress: true,
        port: 3000,
      },
};