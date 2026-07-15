import React, { useCallback, useState } from 'react'
import ChildButton from './ChildButton'

const Callback = () => {
  const [count,setCount]=useState(0)
  const [text,setText]=useState("")

  console.log("React Callback")

  const handleClick=useCallback(()=>{
    console.log("handleCLick")
    setCount((prev)=>prev+1)
  },[count])
  return (
    <div>
      <h2>Count: {count}</h2>

      <ChildButton onClick={handleClick} />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </div>
  )
}

export default Callback