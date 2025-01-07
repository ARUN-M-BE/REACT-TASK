import './App.css';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='space'>
      <h1>Navbar Branch</h1>
     
      <div className="space">
        <Routes>
            <Nav/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
