import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

// import axios from 'axios';
// import { addDataToMinePageActionCreator } from '@/store/action';

function myMid(midAPI) {
    // midAPI.dispatch()
    return function (nextDisp) {
        return function (action) {
            console.log(action);
            // midAPI.dispatch(action)
        };
    };
}

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
