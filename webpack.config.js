const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        application: "./app/application.js",
        styles: "./app/styles.css",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "webpacked-[name].css",
        }),
        new ManifestPlugin({
            writeToFileEmit: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            }
        ]  
    },
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        public: "localhost:8080",
    },
}