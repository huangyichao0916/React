## babel
- code -> code

## babel插件
- 每个插件都需要有一个visitor的属性，这个属性是一个对象，由自己来实现

## 流程
1. js是一段字符串
2. babel对其进行词法分析，然后是语法分析
3. 生成AST树
4. 自己实现visitor这个对象
5. 修改AST树
6. 生成新的代码