import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [factor, setFactor] = useState(1);

    function increment() {
        setCount(count + factor);
    }
    function decrement() {
        setCount(count - factor);
        if(count <= 0){
            setCount(0);
        }
    }
    function incrementFactor() {
        setFactor(factor + 1);
    }
    function decrementFactor() {
        setFactor(factor - 1);
        if(factor <= 0){
            setFactor(0);
        }
    }
  
    return (
        <div className='space'>
            <h1>Count</h1>
            <h3>Count Value is : {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h3>Factor Value is : {factor}</h3>
            <button onClick={incrementFactor}>Increment</button>
            <button onClick={decrementFactor}>Decrement</button>
        </div>
    )
}

export default Counter