import { Configuration } from "webpack";
import path from "path";
const CopyWebpackPlugin = require("copy-webpack-plugin");

const __VERSION__ = require("child_process")
    .execSync("git rev-list HEAD --count")
    .toString();

const config = (env: any, argv: any): Configuration => {
    const config: Configuration = {
        target: "web",
        entry: {
            bundle: "./src/index.tsx",
        },
        output: {
            path: path.join(__dirname, "../dist"),
            filename: "[name].js",
            publicPath: "/",
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
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
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: "./sw.js",
                        to: "./sw.js",
                        transform(content: File) {
                            let parsed = content.toString();
                            const version = `CACHE_VERSION_${parseInt(
                                __VERSION__,
                                10
                            )}`;
                            parsed = parsed.replace("CACHE_VERSION", version);
                            parsed = parsed.replace("STARTUP_MODE", argv.mode);
                            return Buffer.from(parsed, "utf8");
                        },
                        force: true,
                    },
                    {
                        from: "./wdyr.js",
                        to: "./wdyr.js",
                        transform(content: File) {
                            let parsed = content.toString();
                            parsed = parsed.replace("STARTUP_MODE", argv.mode);
                            return Buffer.from(parsed, "utf8");
                        },
                        force: true,
                    },
                ],
            }),
        ],
    };

    return config;
};

export default config;
