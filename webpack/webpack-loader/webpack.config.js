const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './public',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.md$/,
                use: [
                    path.resolve(__dirname,'./src/myLoader.js'),
                    'babel-loader',
                    path.resolve(__dirname,'./src/md-loader.js')
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'babel-loader',
                    path.resolve(__dirname,'./src/vueLoader.js'),
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ]
}


module.exports = config