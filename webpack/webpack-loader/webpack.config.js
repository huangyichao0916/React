const HtmlWebpackPlugin = require('html-webpack-plugin')

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
                test: /.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /.md$/,
                use: './src/md-loader.js'
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