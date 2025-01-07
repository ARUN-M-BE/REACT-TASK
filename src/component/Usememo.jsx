import React, {useMemo, useState} from 'react'

function Usememo1() {
  const [count, setCount] = useState(0);
  const memory = useMemo(() => {
    let amount = 100*count;
    return amount;
    console.log(`${memory & count}`);
  } , []); 
  return (
    <div className='space'>
      <h1>Usememo</h1>
      <h1> The count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h1>The Memory is {memory}</h1>
    </div>
  )
}

export default Usememo1