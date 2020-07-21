import {fromJS} from 'immutable';
import {BUY_LESSON,RECHARGE} from './action';
import {ADD_DATA_TO_MINE_PAGE,SET_IS_DOTED_TO_TRUE,SET_IS_DOTED_TO_FALSE} from './action';

let defaultBalanceState = 0;
const balanceReducer = (state = defaultBalanceState,action) => {
    const {type,payload} = action;
    switch (type) {
        case BUY_LESSON:
            return state - payload;
        case RECHARGE:
            return state + payload;
        default:
            return state;
    }
}

let defaultMineItemState = fromJS([]);
const MineItemReducer = (state = defaultMineItemState,action) => {
    const {type,payload} = action;
    switch (type) {
        case ADD_DATA_TO_MINE_PAGE:
            return fromJS(payload);
        case SET_IS_DOTED_TO_TRUE:
            // let isDoted = state.getIn([payload,'isDotShow']);
            // isDoted = isDoted === 1 ? 0 : 1;
            return state.setIn([payload,'isDotShow'],1);
        case SET_IS_DOTED_TO_FALSE:
            return state.setIn([payload,'isDotShow'],0);
        default:
            return state;
    }
}


const reducers = {
    account:balanceReducer,//账户余额 Number
    mineItemDateSource:MineItemReducer,//我的 页面的每一项的数据 Array
}

export default reducers;