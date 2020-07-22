import {fromJS} from 'immutable';
import {BUY_LESSON,RECHARGE} from './action';
import {ADD_DATA_TO_MINE_PAGE,SET_IS_DOTED_TO_TRUE,SET_IS_DOTED_TO_FALSE} from './action';
import {ADD_DATA_TO_COURSE_LESSON} from './action';

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
const mineItemReducer = (state = defaultMineItemState,action) => {
    const {type,payload} = action;
    switch (type) {
        case ADD_DATA_TO_MINE_PAGE:
            return fromJS(payload);
        case SET_IS_DOTED_TO_TRUE:
            return state.setIn([payload,'isDotShow'],1);
        case SET_IS_DOTED_TO_FALSE:
            return state.setIn([payload,'isDotShow'],0);
        default:
            return state;
    }
}

let defaultcourseLessonItemState = fromJS([]);
const courseLessonItemReducer = (state = defaultcourseLessonItemState , action) => {
    const {type,payload} = action;
    switch (type) {
        case ADD_DATA_TO_COURSE_LESSON:
            return fromJS(payload);
    
        default:
            return state;
    }
}


const reducers = {
    account:balanceReducer,//账户余额 Number
    mineItemDateSource:mineItemReducer,//我的 页面的每一项的数据 Array
    courseLessonDataSource:courseLessonItemReducer,//讲堂的课程页面下面的数据源 Array
}

export default reducers;