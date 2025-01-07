import { useState } from 'react'
import State from './component/State'
import './App.css'
import Form from './component/Form'
import Count from './component/count'
import COntext from './component/context'
import Reduser from './component/Reduser'
import Form1 from './component/Form1'
import Count1 from './component/count1'
import COntext1 from './component/context1'
// import Reduser1 from './component/Reduser1'
import Form2 from './component/Form2'
import Reduser2 from './component/Reduser2'
import Prop from './component/Prop'
// import Movie from './component/Movie/Movie'
import Useref from './component/Useref'
import Usememo from './component/Usememo'
import Home from './component/Navication/Home'
import Nav from './component/Navication/Nav'
import About from './component/Navication/About'
import Contact from './component/Navication/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>hoi</h1>
      <State></State>
      <Form/>
      <Count/>
      <COntext/>
      <Form1/>
      <Form2/>
      <Count1/>
      <COntext1/>
      <Reduser/>
      <Reduser2/>
      <Prop/>
      <Useref/>
      <Usememo/>
      <div className="space">
        {/* <Movie/> */}
      </div>
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
