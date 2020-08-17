import React from 'react';
import './hello.css';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import {StoreState} from '../types';
import {EnthusiasmAction,incrementEnthusiasmActionCreator,decrementEnthusiasmActionCreator} from '../actions';

export interface Props{
    name: string;
    enthusiasmLevel?: number;
    onIncrement:() => void;
    onDecrement:() => void;
}

const Hello = ({name, enthusiasmLevel = 1,onIncrement,onDecrement}:Props) => {
    if (enthusiasmLevel < 0) {
        throw new Error("不能小于0");
    }
    return(
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state:StoreState) => {
    const {enthusiasmLevel,languageName} = state.reducer;
    return{
        enthusiasmLevel: enthusiasmLevel,
        name: languageName,
    }
}
const mapDispatchToProps = (dispatch:Dispatch<EnthusiasmAction>) => {
    return {
        onIncrement:() => {
            dispatch(incrementEnthusiasmActionCreator())
        },
        onDecrement:() => {
            dispatch(decrementEnthusiasmActionCreator())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);

function getExclamationMarks(numChars: number):string {
    return Array(numChars + 1).join('!');
}