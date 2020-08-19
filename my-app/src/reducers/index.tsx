import {reducerState,StoreState} from '../types';
import {EnthusiasmAction} from '../actions';
import {INCREMENT_ENTHUSIASM,DECREMENT_ENTHUSIASM} from '../constants';
import {Reducer,combineReducers,ReducersMapObject} from 'redux';

let defaultState:reducerState = {
    languageName: 'ch',
    enthusiasmLevel: 1,
}
const reducer:Reducer<reducerState,EnthusiasmAction> = (state: reducerState = defaultState,action: EnthusiasmAction):reducerState => {
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
interface RMO{
    reducer: reducerState;
}
let reducers:ReducersMapObject<RMO,EnthusiasmAction> = {
    reducer,
}
let rootReducer:Reducer<StoreState,EnthusiasmAction> = combineReducers(reducers)
export default rootReducer;