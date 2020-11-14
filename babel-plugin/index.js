const code = `import {zip} from 'lodash'`
const t = require('babel-types')
//after tranverse
// import zip from 'lodash/zip';

const babel = require('@babel/core')
const { identifier } = require('babel-types')

const plugin = {
    ImportDeclaration(path){
        if(!t.isImportDefaultSpecifier(path.node.specifiers[0])){//如果不是通过默认导入，就会对该节点进行操作
            let identify = t.identifier('zip')
            // console.log(identify)
            let descs = [t.importDefaultSpecifier(identify)];//创建默认导入
            // console.log(descs)

            let str = t.stringLiteral('lodash/zip')//创建导入源
            // console.log(str)
            let importStatement = t.importDeclaration(descs,str)
            // console.log(importStatement)
            path.replaceWith(importStatement)
        }
    },
}

const res = babel.transform(code,{
    plugins:[
        {
            visitor: plugin
        }
    ]
})
console.log(res)