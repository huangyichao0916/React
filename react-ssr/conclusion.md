- 同构：让代码即可以在服务端运行，也可以在浏览器端运行

## 刚才做了什么
### 同构组件
1. 同构组件，服务端bundle.js是一个node项目，由webpack打包而来
2. 客户端 /public/index.js 是由 client/index.js经过webpack打包而来
3. node服务端让react组件通过 renderToString 渲染成html字符串
4. node服务返回的东西是仅仅带有html内容的字符串，但是不带有其中的事件函数
5. 执行 /public/index.js 让事件函数挂载在页面上(绑定事件)

### 同构路由
1. 需要根据当前的URL渲染页面
2. 客户端通过 BrowserRouter
3. 服务端手动传 URL

## 为什么服务端打印了123
- renderToString()函数，在将组件生成字符串的时候同时让组件函数执行一遍，遇到了
  console.log(123)之后就在控制台打印了