import React from 'react'

const ChildButton =React.memo(({onClick}) => {
    console.log("Hello")
  return <button onClick={onClick}>Increment</button>;
})

export default ChildButton