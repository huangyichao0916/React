import App from './App';
import Children from './children';
import GrandChildren from './grandChildren';
import GrandChildren222 from './grandChildren222';

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
            },
            {
                path:'/children/grandchildren222',
                component:GrandChildren222,
            },
        ]
    }
]

export default routes;