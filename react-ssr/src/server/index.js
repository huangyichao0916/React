import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server'
import Header from '../common/header';

const app = express();

app.get('*',(req,res) => {
    const root = <Header/>
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
        </body>
        </html>
    `)
})

app.listen(3000,() => {
    console.log('server is running in port 3000')
})