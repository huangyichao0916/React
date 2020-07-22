//account相关的action creator
export const BUY_LESSON = 'BUY_LESSON';
export const RECHARGE = 'RECHARGE';
export const buyLessonActionCreator = payload => {
    return {
        type:BUY_LESSON,
        payload
    }
}
export const rechargeActionCreator = payload => {
    return {
        type:RECHARGE,
        payload
    }
}

//mineItemDateSource相关的action creator
export const ADD_DATA_TO_MINE_PAGE = 'ADD_DATA_TO_MINE_PAGE';
export const SET_IS_DOTED_TO_TRUE = 'SET_IS_DOTED_TO_TRUE';
export const SET_IS_DOTED_TO_FALSE = 'SET_IS_DOTED_TO_FALSE';
export const addDataToMinePageActionCreator = payload => {//现在的payload是mine的datasource
    return{
        type:ADD_DATA_TO_MINE_PAGE,
        payload,
    }
}
export const setIsDotedToTrueActionCreator = payload => {//现在的payload是mineItem的key
    return{
        type:SET_IS_DOTED_TO_TRUE,
        payload
    }
}
export const setIsDotedToFalseActionCreator = payload => {//现在的payload是mineItem的key
    return{
        type:SET_IS_DOTED_TO_FALSE,
        payload
    }
}

//courseLessonItem相关的action creator
export const ADD_DATA_TO_COURSE_LESSON = 'ADD_DATA_TO_COURSE_LESSON';
export const addDataToCourseLessonActionCreator = payload => {
    return {
        type:ADD_DATA_TO_COURSE_LESSON,
        payload
    }
}

// practiceCamp购买课程相关的action create 权佳欣
export const practiceCampBuyLessonActionCreator = payload => {
    return (dispatch, getState) => {
        dispatch(buyLessonActionCreator(payload));
        dispatch(setIsDotedToTrueActionCreator(0));
        dispatch(setIsDotedToTrueActionCreator(1));
        dispatch(setIsDotedToTrueActionCreator(2));
    }
}