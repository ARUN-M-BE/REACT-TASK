import React, {useState} from 'react'

function Form() {

    const [text, setName] = useState('')

    function handleChange() {
       console.log('change')
    }

  return (
    <div>
        <form>
            <input onChange={handleChange} type="text" value={text}/>
            <h1>{text}</h1>
            <button></button>
        </form>
    </div>
  )
}

export default Form