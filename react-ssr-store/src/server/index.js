import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Header from '../common/Header';

const app = express();
app.get('*', (req, res) => {
  const htmlStr = renderToString(<Header />)
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
// 渲染 react 组件
app.listen(9090, () => {
  console.log('server is running 9090');
})