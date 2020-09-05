import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import routes from '../routes'
import {renderRoutes} from 'react-router-config'

function App() {
    return(
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    )
}

/**
 * root节点下面已经有html内容了
 * 现在只需要完成服务端完成不了的 事件绑定
 */
ReactDOM.hydrate(
    <App/>,
    document.getElementById('root')
)