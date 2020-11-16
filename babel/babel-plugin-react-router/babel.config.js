/**
 * 因为插件没有发布到NPM上面去，所以只能用这种方式引入插件
 */

const babelTransformReactRouter = require('./plugin.js')

module.exports = {
    "plugins": [babelTransformReactRouter]
};