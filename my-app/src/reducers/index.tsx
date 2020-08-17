import {StoreState} from '../types';
import {EnthusiasmAction} from '../actions';
import {INCREMENT_ENTHUSIASM,DECREMENT_ENTHUSIASM} from '../constants';
import {Reducer,combineReducers} from 'redux';


let defaultState:StoreState = {
    languageName: 'ch',
    enthusiasmLevel: 1,
}
const reducer:Reducer = (state: StoreState = defaultState,action: EnthusiasmAction):StoreState => {
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

export default reducer;