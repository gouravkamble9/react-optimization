import React, { useState } from 'react'
import ChildMemo from './ChildMemo'

const ReactMemo = () => {
    const [data, setData] = useState(true)
    const [input, setInput] = useState("")

    console.log("React Memo")

    return (
        <div className='flex flex-col w-1/4'>
            <span>ReactMemo</span>
            <div className='flex flex-col'>
                <input className="border-1 w-42" type="text" onChange={(e) => setInput(e.target.value)} />
                <span>Value:{input}</span>
            </div>
            <button className='border' onClick={()=>setData(!data)}>Click</button>
            <ChildMemo data={data} />
        </div>
    )
}

export default ReactMemo