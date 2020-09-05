import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from '../routes'

const app = express();

app.use(express.static('public'))//把public映射成静态资源的目录,让script标签请求

app.get('*',(req,res) => {
    const root = (
        <StaticRouter location={req.url}>
            {renderRoutes(routes)}
        </StaticRouter>
    )
    const htmlStr = renderToString(root);
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
            <div id="root">${htmlStr}</div>
            <script src="/index.js"></script>
        </body>
        </html>
    `)
})

app.listen(3000,() => {
    console.log('server is running in port 3000')
})