## SPA 单页应用
- vue和react经过webpack打包后就是一个单页应用
- 要等js把内容渲染到root节点上面去，白屏时间比较长，用户不能第一时间看到内容

## MPA 多页应用

## SSR 服务端渲染
- vue/react -> webpack -> 后端(node)
- 解决了白屏问题，用户第一次访问html就可以看到内容

- ReactDOM.hydrate()，让事件能够正常绑定到组件上面
- ReactDOM.render() 和 ReactDOM.hydrate()的区别

## 同构
- 同构 Store(redux)
- 同构 Router
 1. 在浏览器端，router是通过history属性完成的
 2. 在node端是没有history属性的
 3. 在服务端引入StaticRouter
- 同构 组件

## 注意
1. 输入URL的话才会触发服务端渲染
2. 之后在页面上点击的话都归JS来管，也就是由前端路由来管