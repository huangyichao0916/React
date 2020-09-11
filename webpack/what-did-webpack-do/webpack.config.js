const css_loader = require('./src/css-loader.js')

module.exports = {
    module:{
        rules:[
            {
                test:/.css$/,
                use:[css_loader]
            }
        ]
    }
}