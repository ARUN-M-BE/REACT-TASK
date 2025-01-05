import React,{useEffect, useState} from 'react'

function State() {
  const [count, setCount] = useState(10);
  const [value, setValue] = useState('offer is on');
  // const [value1, setValue1] = useState('shop is opne');

  const buttonClick = () => {
    setCount(count - 1);
  }
  useEffect(() => {
    if(count <= 5){
      setValue('hurry up offer is going to end only left '+ count);
    }
  }, [count]);

  useEffect( function negative() {
    if(count <= 1){
      setCount(0);
      setValue('shop is closed');
    }
  }, [count]);
  return (
    <div className='space'>
        <h1>State</h1>
        <h3>only {count} open</h3>
        <button onClick={buttonClick}>Click Me</button>
        <h3>{value}</h3>
    </div>
  )
}
  

export default State