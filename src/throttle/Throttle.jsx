import React, { useRef } from 'react'

const Throttle = () => {

     const isThrottled = useRef(false);

    const apiCall = () => {
        console.log("API call");
    };

    const handleClick=()=>{
        if(isThrottled.current){
            return 
        }

        apiCall()
        isThrottled.current=true

         setTimeout(() => {
            isThrottled.current = false;
        }, 2000);
    }
    
  return (
    <div>Throttle
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Throttle