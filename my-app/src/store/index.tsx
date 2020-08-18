import {createStore,Store} from 'redux';
import reducers from '../reducers';
import {StoreState} from '../types';
import {EnthusiasmAction} from '../actions';

const store:Store<StoreState,EnthusiasmAction> = createStore(reducers);
export default store;