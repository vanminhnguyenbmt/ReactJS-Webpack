const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}

module.exports = config;