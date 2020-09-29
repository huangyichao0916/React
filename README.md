# React
react project


# redux hooks
## react-redux

### connect
mapState: 返回一个对象 react-redux 会进行浅比较，阻止re-render

### useSelector
对上一次返回的值和这一次返回的值，进行引用比较，只要不相等就会 re-render

所以如果useSelector返回一个新对象，那么每次都会re-render

如果你需要从 store 里面取出多个值，官方建议是：
- 多次 useSelector，每个 useSelector 只返回一个值，避免直接返回一个对象
- Reselect
- shallowEqual


# React API

## setState
1. setState会被覆盖
 ```js
    onClick = () => {
        this.setState({ index: this.state.index + 1 });
        this.setState({ index: this.state.index + 1 });
    }
    //上述方法会变成：
    Object.assign(
        previousState,
        {index: state.index+ 1},
        {index: state.index+ 1},
        ...
    )

 ```
 - 如果要避免setState被覆盖，可以使用函数当setState的参数
  ```js
    onClick = () => {
        this.setState((prevState, props) => {
            return {quantity: prevState.quantity + 1};
        });
        this.setState((prevState, props) => {
            return {quantity: prevState.quantity + 1};
        });
    }
    //useState这个hooks也可以接受函数作为参数，并且和class组件的this.setState一样，可以避免
    //state被覆盖

    //需要注意的是
  ```

2. setState的同步异步问题
 - 在React中，如果是由React引发的事件处理（比如：onClick引发的事件处理），调用setState不会同步更新this.state，
   除此之外的setState调用会同步执行this.setState。 “除此之外”指的是：绕过React通过addEventListener直接添加
   的事件处理函数和setTimeout/setInterval产生的异步调用。

 - pending队列
   - 每次调用setState，新的state会被放到pending队列中，并不会立即执行，等到时机成熟的时候再一次性合并成一次setState，
     这就是为什么setState是异步的原因
   - isBathingUpdates
     每次setState产生新的state会依次被存入一个队列，然后会根据isBathingUpdates变量判断是直
     接更新this.state还是放进dirtyComponent里回头再说。当React在调用事件处理函数之前就会
     调用batchedUpdates，这个函数会把isBatchingUpdates修改为true，造成的后果就是
     由React控制的事件处理过程setState不会同步更新this.state
     **所以，除了React引发的事件处理，其他的setState都是同步调用**

 - setState的同步意味着，多个setState不会被覆盖
 - 需要注意的是：如果是hooks使用setState并且使用了state作为参数的话，需要小心函数闭包的问题，这是class组件与函数组件
   使用hooks的区别