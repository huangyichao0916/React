const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        "order":"./src/pages/order/index.js",
        "promotion":"./src/pages/promotion/index.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ],
                        }
                    }
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/order/index.html',
            filename: 'order.html',
            chunks:[
                "order" // 只需要order.js这个文件
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/promotion/index.html',
            filename: 'promotion.html',
            chunks:[
                "promotion" // 只需要promotion.js这个文件
            ]
        })
    ]
};