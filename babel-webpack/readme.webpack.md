## 核心概念
1. entry
 - webpack从这里开始构建内部依赖图

2. output
 - 告诉webpack在哪里输出 bundle.js ，以及如何命名
 - 默认为 ./dist

3. loader
 - 用于转换某些类型的模块
 - 让webpack可以处理那些非JS的文件（webpack 自身只理解 JavaScript）
 - test和use
 - 必须写在module.rules下面

4. plugins
 - 比loader执行的范围更广
 - 打包优化，压缩
 - 功能非常强大，可以用来处理各式各样的任务
 - npm下载，require引入，new创建实例，最后添加到plugins数组当中

 ```js
    const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
    const webpack = require('webpack'); // 用于访问内置插件

    const config = {
        module: {
            rules: [
                { test: /\.txt$/, use: 'raw-loader' }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({template: './src/index.html'})
        ]
    };

    module.exports = config;
 ```


## 模式
- 选择development或者production中的一个来进行webpack内置的优化
```js
    module.exports = {
        mode: 'production'
    };
```

## 插件
 - 插件目的在于解决 loader 无法实现的其他事。
 - 由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例。

## configuration
 - webpack 配置是标准的 Node.js CommonJS 模块
 - 始终采取同一种用法、格式和风格

## 模块路径解析
 - 如果路径具有文件扩展名，则被直接将文件打包
 - 如果路径没有扩展名，则使用 [resolve.extensions] 选项作为文件扩展名来解析，此选项告诉解析器在解析中能够接受哪些扩展名（例如 .js, .jsx）。

