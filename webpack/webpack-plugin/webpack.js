const { SyncHook, AsyncSeriesHook } = require('tapable');
const Plugin = require('./plugin');
class Webpack {
  constructor() {
    // 生命周期
    this.hooks = {
      emit: new AsyncSeriesHook(),
      done: new SyncHook()
    }
  }
  run() {
    setTimeout(() => {
      this.hooks.emit.promise();
    }, 1000);
    setTimeout(() => {
      this.hooks.done.call();
    }, 2000);
  }
}
let options = {
  plugins: [new Plugin()]
}
let complier = new Webpack();//获取webpack的实例
for (let p of options.plugins) {
  // 插件
  p.apply(complier);//插件实例拿到webpack的实例，然后在其内部注册事件，webpack运行的时候，就会执行这些插件的功能了
  // apply (complier) { complier.hooks.emit.tapXXXX }
}
complier.run();