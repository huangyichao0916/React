import TEMP3 from './b';
import TEMP2 from './a';
import TEMP from './index';
export default [{
  path: '/',
  component: TEMP,
  routes: [{
    path: '/a',
    component: TEMP2
  }, {
    path: '/b',
    component: TEMP3
  }]
}];
