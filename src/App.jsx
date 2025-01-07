import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';

function App() {

  return (
    <div className='space'>
      <h1>Navbar Branch</h1>
      <Nav/>
      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
