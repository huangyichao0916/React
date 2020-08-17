import {reducerState} from '../types';
import {EnthusiasmAction} from '../actions';
import {INCREMENT_ENTHUSIASM,DECREMENT_ENTHUSIASM} from '../constants';
import {Reducer,combineReducers,ReducersMapObject} from 'redux';

let defaultState:reducerState = {
    languageName: 'ch',
    enthusiasmLevel: 1,
}
const reducer:Reducer = (state: reducerState = defaultState,action: EnthusiasmAction):reducerState => {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return {
                ...state,
                enthusiasmLevel: state.enthusiasmLevel + 1,
            }
        case DECREMENT_ENTHUSIASM:
            return{
                ...state,
                enthusiasmLevel: state.enthusiasmLevel - 1,
            }
        default:
            return state;
    }
}

let reducers:ReducersMapObject = {
    reducer
}
let rootReducer:Reducer = combineReducers(reducers)
export default rootReducer;