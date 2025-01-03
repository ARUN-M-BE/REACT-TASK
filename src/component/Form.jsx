import React, {useState} from 'react'

function Form() {
    
        const [name, setName] = useState({firstName:'', lastName:''})
  return (
    <div>
        <h1>Form</h1>
        <h3>{name.firstName} - {name.lastName}</h3>
        <form>
            <label>FirstName</label>
            <input onChange={(e)=>setName({...name, firstName: e.target.value})} type="text" value={name.firstName}/>
            <label>LastName</label>
            <input onChange={(e)=>setName({...name, lastName: e.target.value})} type="text" value={name.lastName}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Form