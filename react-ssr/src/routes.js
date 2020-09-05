import React from 'react'
import App from './App'
import Detail from './Detail'
import Home from './Home'
import Login from './Login'


export default  [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home,
            },
            {
                path: '/login',
                component: Login,
            },
            {
                path: '/detail',
                component: Detail,
            }
        ]
    }
]

// export default routes =  [
//     {
//         path: '/',
//         exact: true,
//         component: Home,
//     },
//     {
//         path: '/login',
//         component: Login,
//     },
//     {
//         path: '/detail',
//         component: Detail,
//     }
// ]