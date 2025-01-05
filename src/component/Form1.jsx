import React, {useState} from 'react'

function Form() {

    const [text, setName] = useState()

    function handleChange() {
        setName(text)
    }

  return (
    <div className='space'>
        <form>
            <input onChange={handleChange} type="text" value={text}/>
            <h1>The {text}</h1>
            <button></button>
        </form>
    </div>
  )
}

export default Form