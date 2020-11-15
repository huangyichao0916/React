# webpack的loader的学习
- 写一个webpack-loader组件


## 思想
- loader就是一个函数，它可以接收到代码，把它当做一个字符串，我们可以在这个字符串上
进行一些操作
- 需要注意的是：写好了md文件的loader，但是还不够，webpack最终的目的还是要转化成
js的语法，而不是jsx的语法，所以，遇到md文件，首先需要使用**自己的loader**，然后使用
**babel-loader**转化成js法