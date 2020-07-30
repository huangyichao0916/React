import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef, useCallback } from 'react';

export const TextInput = forwardRef((props, ref) => {
    const [value, setValue] = useState("");
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        value: inputRef.current.value,
    }));
    const changeValue = e => {
        setValue(e.target.value);
    };
    return <input ref={inputRef} value={value} onChange={changeValue}></input>;
});

// export function TextInputWithFocusButton() {
//     const inputEl = useRef(null);
//     const [value, setValue] = useState("");
//     useEffect(() => {
//         setValue(inputEl.current.value);
//     }, [inputEl]);
//     const onButtonClick = () => {
//         // `current` 指向已挂载到 DOM 上的文本输入元素
//         console.log("input值", inputEl.current.value);
//         setValue(inputEl.current.value);
//     };
//     return (
//         <>
//             <div>
//                 子组件: <TextInput ref={inputEl}></TextInput>
//             </div>
//             <div>
//                 父组件: <input type="text" value={value} onChange={() => { }} />
//             </div>
//             <button onClick={onButtonClick}>获得值</button>
//         </>
//     );
// }

export function TextInputWithFocusButton() {
    const [value, setValue] = useState("");
    const inputEl = useCallback(node => {
        if (node !== null) {
            console.log("TCL: TextInputWithFocusButton -> node.value", node.value)
            setValue(node.value);
        }
    }, []);

    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        console.log("input值", inputEl.current.value);
        setValue(inputEl.current.value);
    };
    return (
        <>
            <div>
                子组件: <TextInput ref={inputEl}></TextInput>
            </div>
            <div>
                父组件: <input type="text" value={value} onChange={() => { }} />
            </div>
        </>
    );
}