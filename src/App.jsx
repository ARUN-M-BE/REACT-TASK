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
import Useref from './component/Useref'
import Usememo from './component/Usememo'
function App() {

  return (
    <>
      <h1>Task Branch</h1>
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
     
    </>
  )
}

export default App
