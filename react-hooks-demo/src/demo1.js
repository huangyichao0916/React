import React, { memo } from 'react'

const setSatisfacationClass = level => {
  if (level < 100) {
    return "very-dissatisfied"
  }
  if (level < 200) {
    return "somewhat-dissatisfied"
  }
  if (level < 300) {
    return "neither"
  }
  if (level < 400) {
    return "somewhat-satisfied"
  }
  return "very-satisfied"
}


const isSameRange = (prevValue, nextValue) => {
  const prevValueClass = setSatisfacationClass(prevValue.level)
  const nextValueClass = setSatisfacationClass(nextValue.level)
  console.log(prevValue.level,nextValue.level);
  return prevValueClass === nextValueClass;
}

//memo的dependencies是一个函数，这个函数可以拿到改变之前的props以及props将要改变的值
export const FaceComponent = memo(props => {
  console.log('asd')
  const { level } = props;
  return (
    <div className={setSatisfacationClass(level)}>
    </div>
  )
}, isSameRange)
