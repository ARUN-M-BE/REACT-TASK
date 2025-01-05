import React, {useReducer, useState} from 'react'

const initialState = 0;
function Reduser1( state, action) {
    if(action.type == 'increment'){
        return state + 1
    }
    else if(action.type == 'reset'){
        state <= initialState ? alert('your already resetedd') : ( state = initialState)
        return initialState
    }
    else if (action.type == 'decrement'){
        state <= 0 ? alert('you can not go below 0') : (state - 1)
        return state - 1 > 0 ? state - 1 : 0
    }
}
function Reduser() {
    const [state, setState] = useReducer(Reduser1, initialState)
  return (
    <div className='space'>
        <h1>
           here count {state}
        </h1>
        <button onClick={() => setState({type: 'increment'})}>increment</button>
        <button onClick={() => setState({type: 'decrement'})}>decrement</button>
        <button onClick={() => setState({type: 'reset'})}>reset</button>

    </div>
  )
}

export default Reduser