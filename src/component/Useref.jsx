import React, {useRef, useState} from 'react'

function Useref1() {
    const [count, setCount] = useState(0);
    const searchIn = useRef(null);
    const searchClick = () => {
        searchIn.current.focus();
    }
    const inputRef = useRef(0);
    const buttonClick = () => { 
        inputRef.current  =+ 1;
        console.log(inputRef.current);
    }
  return (
    <div className='space'>
        <h1> Usefre & Search </h1>
        <input ref={searchIn} type="text" />
        <button onClick={searchClick}>Search</button>
        <h3>The clicked count is {inputRef.current}</h3>
        <button onClick={buttonClick}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="" width={100} height={100}/></button>
    </div>
  )
}

export default Useref1