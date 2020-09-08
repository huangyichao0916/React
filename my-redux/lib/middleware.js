const mid1 = (next) => (action) => {
    if (typeof action === 'function') {
        return action();
    }
    return next(action);
}
const mid2 = (next) => (action) => {
    console.log('mid2 start');
    next();
    console.log('mid2 end');
}
// redux 已经加载完了 两个中间件
const middlewares = [mid1, mid2];


function myFlow(fns) {
    // 组合所有的 函数
    // fn3(fn2(fn1()))
    return function (defaultVal) {
        let res = defaultVal;
        while (fns.length) {
            let fisrt = fns.shift();
            res = fisrt(res);
        }
        return res;
    }
}