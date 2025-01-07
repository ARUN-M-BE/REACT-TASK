import { useState } from 'react'
import './App.css'
import Movie from './component/Movie/Movie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Movie Branch</h1>
      <div className="space">
        <Movie/>
      </div>
    </>
  )
}

export default App
