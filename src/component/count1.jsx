import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
        if(count >= 10){
            setCount(count + 5);
        }
        else if(count >= 50){
            setCount(count + 10);
        }
    }
    function decrement() {
        setCount(count - 1);
        if(count <= 0){
            setCount(0);
        }
        else if(count >= 10){
            setCount(count - 5);
        }
        else if(count >= 50){
            setCount(count - 10);
        }
    }
  
    return (
        <div className='space'>
            <h1>Count</h1>
            <h3>Count Value is : {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter