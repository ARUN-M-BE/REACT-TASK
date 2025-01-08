import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';

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
