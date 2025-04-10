const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    entry:"./main.ts",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.xml$/,
                use: 'xml-loader'
            },
            {
                test: /\.(scss|sass)$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
            {
                test: /\.(jpe?g|gif|webp|png)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve:{
        extensions: [".js",".ts"],
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    },
    plugins:[
       new HTMLPlugin({
            template: 'index.html'
       }), 
       new CopyPlugin({
            patterns: [
                {
                    from: "assets", to: "assets"
                },
                {
                    from: "data", to: "data"
                }
            ]
       })
    ],
}