import React from 'react'

const ChildMemo =React.memo(({data}) => {

    console.log(data)

  return (
    <section>
        <span>Child Component :</span>
        <span>{data ? "open" : "close"}</span>
    </section>
  )
})

export default ChildMemo