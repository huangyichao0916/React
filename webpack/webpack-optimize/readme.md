# webpack 的优化

1. externals  分离基础库  
 - 基础库不怎么变动，业务代码经常变动，所以要采用不同的策略
 - react  react-dom等第三方模块、各种工具什么的都属于基础库
 - externals:防止将某些 import 的包打包到bundle中，而是在运行时再去外部获取这些扩展依赖
    加了externals后会将某些包排除在外，这样打包完的东西就不能正常运行了，需要自己来处理这些包,方法：
    在public目录下面的index.html里面用script标签的方式来引入外部包

    https://webpack.docschina.org/configuration/externals/#externals

2. optimization 
 - ```js
    optimization:{
        splitChunks: {
            chunks:'all',//所有的import 、 async import() 、 sync import()
            cacheGroups:{
                vendors:{
                    test: /[\\/]node_modules[\\/]/,
                }
            }
        },
    },
   ```

3. css提取
 - yarn add mini-css-extract-plugin -D
 - const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 - new MiniCssExtractPlugin()
 - use: [MiniCssExtractPlugin.loader, 'css-loader'],