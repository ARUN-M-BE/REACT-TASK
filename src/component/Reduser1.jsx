import React, {useReducer, useState} from 'react'

const initialState = {count: 0}
function Reduser( state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            return state
    }
  return (
    <div className='space'>
        <h1>
            {state.count}
        </h1>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        
    </div>
  )
}

export default Reduser