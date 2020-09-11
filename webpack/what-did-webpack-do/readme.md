## webpack的plugin
- webpack打包会有一系列的生命周期
- plugin可以监听webpack的生命周期(option,run,emit,done)
- 以html-webpack-plugin为例，当webpack打包完资源后，将得到的资源插到html里面