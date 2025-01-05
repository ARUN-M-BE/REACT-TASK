import React, {useState} from 'react'

function Form() {
    
    const [text, setName] = useState('')
  return (
    <div className='space'>
        <h1>Form</h1>
        <form>
            <input onChange={(e)=>setName(e.target.value)} type="text" value={text}/>
            <h1>{text}</h1>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Form