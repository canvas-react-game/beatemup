const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/pages': path.resolve(__dirname, 'src/pages'),
            '@/config': path.resolve(__dirname, 'src/config'),
            '@/game': path.resolve(__dirname, 'src/game'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
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