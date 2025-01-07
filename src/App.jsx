import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import Nav from './component/Nav'
import About from './component/About'
import Contact from './component/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Navbar Branch</h1>
     
      <div className="space">
        <Nav/>
        <Router>
          <Switch>
            <Route path="/home" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App
