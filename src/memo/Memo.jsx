import React, { useEffect, useMemo, useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    console.log("Use memo")

    const expensiveCalculation = (num) => {
        console.log("Calculating...")
        for (let i = 0; i < 10000000; i++) { }
        return num * 2
    }

    const result = useMemo(() => {
        return expensiveCalculation(count)
    }, [count])

    return (
        <div>
            <h2>Result: {result}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type here"
            />
        </div>
    )
}

export default Memo