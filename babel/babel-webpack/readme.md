- dist目录存着打包完成的结果(bundle)
- dist是最终上线的一个文件夹

## css处理
- css-loader
- yarn add css-loader  style-loader,
- css-loader之负责解析import语法，style-loader才是真正解析css的
 1. css-loader 处理css模块
 2. style-loader  解析css内容  把它插到html的style标签里面
- 在webpack.config.js下面的module下面的rules加入下面内容：
  ```js
  {
    test: /\.css$/i,
    use: ['style-loader','css-loader'],
    //一定要style在前，css在后
  }
  ```