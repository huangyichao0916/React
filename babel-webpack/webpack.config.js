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
            }
        ]
    }
}
module.exports = config;