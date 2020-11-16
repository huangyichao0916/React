class HelloAsyncPlugin {
    apply(compiler) {
        // emit是webpack的生命周期之一：代表webpack 打包完资源了
        compiler.hooks.emit.tap('commentcleaner', compilation => {
            //compilation拿到了webpack打包后的内容
            
            //assets是打包后的资源
            const {assets} = compilation;
            Object.keys(assets).forEach(key => {
                let content = assets[key].source()
                console.log(content)
                content = content.replace(/\/(\*)+\//g,'')
                assets[key]['source'] = () => content;
            })
        });
    }
}

module.exports = HelloAsyncPlugin;