/**
 * plugin是一个函数，返回值是一个对象，这个对象上面
 * 有一个名为visitor的对象，这个visitor对象内部的方法
 * 名对应的就是我们要修改的AST上的节点名
 */
const plugin = function({types: t}){//如果是函数，那么Babel会把types告诉你
    return {
        visitor:{
            ObjectProperty(path){
                const node = path.node;//当前节点
                if (node.key.name !== 'component') {
                    return;
                }
                const source = node.value;//引入的源，这是一个Identifier，我们可以直接使用它
                const program = path.findParent(p => p.isProgram());//找到顶层变量

                //变量名需要在当前模块唯一、不冲突
                const local = program.scope.generateUidIdentifier();//生成一个唯一的变量名，一面变量命名冲突
                local.name = local.name.slice(1).toUpperCase()
                const specifiers = [t.importDefaultSpecifier(local)];

                const importStat = t.importDeclaration(specifiers, source)

                program.node.body.unshift(importStat)//插入到body的顶层

                node.value = local;//将component属性的值修改为local
            }
        }
    }
}
 
module.exports = plugin;