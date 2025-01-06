import React, {useEffect, useReducer, useState} from 'react'

const initialState = 0;
function Reduser1( state, action) {
    if(action.type == 'increment'){
        return state + action.payload;
    }
    else if (action.type == 'decrement'){
        state <= 0 ? alert('you can not go below 0') : (state - action.payload)
        return state - action.payload > 0 ? state - action.payload : 0
    }
}
function Reduser() {
    const [state, setState] = useReducer(Reduser1, initialState)
    const [pay, setPay] = useState(3)
    useEffect(() => {
        if(state >=15){
            setPay(5)
        }
        else if(state >=50){
            setPay(10)
        }
    }, [state])
  return (
    <div className='space'>
        <h1>Pay Load</h1>
        <h3>
           here count {state}
        </h3>
        <button onClick={() => setState({type: 'increment', payload:pay})}>increment</button>
        <button onClick={() => setState({type: 'decrement', payload:pay})}>decrement</button>

    </div>
  )
}

export default Reduser