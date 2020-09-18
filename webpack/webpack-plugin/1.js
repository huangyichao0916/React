const {SyncHook} = require('tapable');

const hook = new SyncHook();

hook.tap('hook1',() => {
    console.log(1)
})

hook.call();