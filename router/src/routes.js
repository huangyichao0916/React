import One from './One';
import Two from './Two';
import Three from './Three';
import aaa from './aaa';
import bbb from './bbb';
import ccc from './ccc';
import App from './App'

export const routes = [
    {
        path: "/",
        component: App,
        routes: [
            {
                path:'/1',
                component: One,
                routes: [
                    {
                        path: '/1/aaa',
                        component: aaa
                    },{
                        path: '/1/bbb',
                        component: bbb
                    },{
                        path: '/1/ccc',
                        component: ccc
                    }
                ]
            },{
                path:'/2',
                component: Two,
            },{
                path:'/3',
                component: Three,
            }
        ]
    }
]