## 前言
- react-router-config的配置，我们需要写一个配置文件(route.js),然后将组件引入，
  然后写path、component、routes，比较繁杂，当页面非常多的时候，工作量有点大，能
  不能用babel插件来解决这个问题呢？
```js
//转换前
export default [
    {
        path:'/',
        component: './index',
        routes:[
            {
                path: '/a',
                component: './a'
            },
            {
                path: '/b',
                component: './b'
            }
        ]
    }
]
```
```js
//转换后
import Index from './index'
import A from './a'
import B from './b'

export default [
    {
        path:'/',
        component: Index,
        routes:[
            {
                path: '/a',
                component: A
            },
            {
                path: '/b',
                component: B
            }
        ]
    }
]
```


## 实现
- 找到component这个对象属性，然后获取它的值，讲这个字符串作为import的源
- 找到顶层变量，顶层变量上面有一个生成唯一的变量名的方法，这样就可以防止变量名冲突了
- 创建import语句
- 插入到body的顶层
- 替换component属性的值
 ```js
  //替换前
  component: './a'
  //替换后
  component: A
 ```
- 

## 将plugin用起来
- 新建一个babel.config.js，然后 yarn add @babel/core @babel/cli
- npx babel route.js  看看控制台的输出结果
- npx babel route.js --out-file consequence.js  将结果写入到一个js文件里
- 发现成功写入了，successful！