import React,{useState,useEffect} from 'react';

export const MyComponent = () => {
    // console.log('app')
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        console.log(123)
        setTimeout(() => {
            setIsVisible(true)
        }, 1500);
    },[])
    return(
        <>
            {isVisible && <h4>{123}</h4>}
            <input type="text"
            value={'switch'}
            onChange={e => setIsVisible(!isVisible)}
            />
        </>
    )
}

// export const MyComponent = () => {
//     console.log('app')
//     const [username, setUsername] = useState('')
//     useEffect(() => {
//         console.log(123)
//         setTimeout(() => {
//             setUsername('黄毅超123')
//         }, 1500);
//     },[])
//     return(
//         <>
//             <h4>{username}</h4>
//             <input type="text"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             />
//         </>
//     )
// }

// export const MyComponent = props => {
//     const [myName, setMyName] = useState('黄毅超');
//     return(
//         <>
//             <h4>
//                 {myName}
//             </h4>
//             <input type="text" 
//             value={myName}
//             onChange={e => setMyName(e.target.value)}
//             />
//         </>
//     )
// }

// export const MyComponent = props => {
//     const [userInfo, setUserInfo] = useState({
//         name: 'john',
//         lastname: 'Doe'
//     });
//     return(
//         <>
//             <h4>
//                 {userInfo.name}{userInfo.lastname}
//                 <input type="text"
//                 value={userInfo.name}
//                 onChange={e => setUserInfo({
//                     ...userInfo,
//                     name: e.target.value,
//                 })}
//                 />
//             </h4>
//         </>
//     )
// }