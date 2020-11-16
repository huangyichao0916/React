## babel插件和webpack loader的区别
 - babel plugin会将代码转换成AST，而webpack loader是直接拿到代码

## webpack plugin
 - 一个插件必须是一个类，类上面必须要有apply方法
 - 插件执行的流程：
  1. 插件的实例拿到webpack的实例，在其内部注册事件
  2. webpack打包的时候就会在指定的生命周期上执行这些事件

## 写一个插件，把webpack打包生成的代码的注释删除掉
