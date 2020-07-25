import App from './App';
import Children from './children';
import GrandChildren from './grandChildren';

const routes = [
    {
        path:'/',
        exact:true,
        component:App,
    },
    {
        path:'/children',
        exact:true,
        component:Children,
        routes:[
            {
                path:'/children/grandchildren',
                component:GrandChildren,
            }
        ]
    }
]

export default routes;