import React, { useState } from 'react'

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);
    const handleAdd = () => {
        setCounter(counter + 1);
    
    }
    const handleRest = () =>{
        setCounter(counter - 1);
    }
    const reset = () =>{
        setCounter(value);
    }
    return (
        <>
            <h1>Contador</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRest}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default CounterApp;
