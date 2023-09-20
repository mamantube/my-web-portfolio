// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import NavBar from './components/Navbar/Navbar';
import { About } from './components/pages/About';
import { Blog } from './components/pages/Blog';
import { Contact } from './components/pages/Contact';

function App() {
  return (
   <>
    <Router>
      <NavBar />

      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>
    </Router>
   </>
  )
}

export default App
