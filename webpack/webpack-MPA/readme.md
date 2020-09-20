## 单页应用 多页应用
- SPA
 1. 只有一个index.html
 2. 所有内容挂载在root节点上
- MPA
 1. 多页应用
 2. 多个html
 3. 适合比较庞大的项目
- SSR

## webpack与多页应用结合
 1. 多个入口
 2. new多个HtmlWebpackPlugin

 - 遇到问题：打包完成后，每个html文件都插入了不同页面的js文件
  - 原因： htmlwebpackplugin会把webpack打包生成的所有js文件都插入到生成的模版中，不管有几个模版，都会插一遍
  - 解决方法：在htmlwebpackplugin中加入 chunks 的配置

 - 微前端