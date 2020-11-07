import {combineReducers} from 'redux-immutable';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

// import axios from 'axios';
// import { addDataToMinePageActionCreator } from '@/store/action';

function myMid(midAPI) {
    // midAPI.dispatch()
    return function (nextDisp) {
        return function (action) {
            console.log(action)
            // midAPI.dispatch(action)
        }
    }
}

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer,applyMiddleware(thunk));



export default store;