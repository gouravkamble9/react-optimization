import React, { useEffect, useState } from 'react'

const Debounce = () => {
    const [query, setQuery] = useState("")
    const [debouncedQuery, setDebouncedQuery] = useState("")

    const apiCall = () => {
        console.log("Api call :", debouncedQuery)
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebouncedQuery(query)
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [query])



    useEffect(() => {
        if (debouncedQuery) {
            apiCall()
        }
    }, [debouncedQuery])


    return (
        <section>
            <span>Debounce</span>
            <input className='border' type="text" onChange={(e) => setQuery(e.target.value)} />
        </section>
    )
}

export default Debounce