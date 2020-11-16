const commentCleaner = require('./commentCleaner.js')
const path = require('path')

module.exports = {
    // entry: path.resolve(__dirname,'./webpack.js'),
    // output: path.resolve(__dirname,'./dist'),
    plugins: [
        new commentCleaner()
    ],
} 