import {createContext,useContext} from 'react'
const ModelContext = createContext();

function Model() {
  return (
    <ModelContext.Provider value={'this is context model'} className='space'>
        <ModelContext.Consumer>
            {(value) => {
            return (
                <div>
                <h1>Model</h1>
                <h3>Model Value is : {value}</h3>
                </div>
            )
            }}
        </ModelContext.Consumer>
    </ModelContext.Provider>
  )
}

export default Model