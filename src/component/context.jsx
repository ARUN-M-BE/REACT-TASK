import {createContext,useContext} from 'react'
const ModelContext = createContext();

function Model() {
  return (
    <ModelContext.Provider value={'this is context model'} className="">
        <Model1/>
    </ModelContext.Provider>
  )
}
function Model1() {
  return (
    <div>
      <Model2/>
    </div>
  )
}
function Model2() {
    const context = useContext(ModelContext)
  return (
    <div>
      <h1>{context}</h1>
    </div>
  )
}

export default Model