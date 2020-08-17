const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    entry: './src/index.js',
    resolve:{
        extensions: ['.js','.jsx'],
    },
    devServer: {//热更新
        contentBase: './dist',
        hot: true,
    },
    module: {
        rules:[
            {
                test: /(.js|.jsx)$/,
                use:['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
        // new BundleAnalyzerPlugin()
    ]
}
module.exports = config;