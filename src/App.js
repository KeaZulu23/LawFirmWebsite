import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home';
import About from './routes/About';
import PracticeArea from './routes/Practice Area';
import Attorney from './routes/Attorney';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/practice-area' element={<PracticeArea />} />
        <Route path='/attorney' element={<Attorney />} /> 
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </>
  );
}

export default App;
