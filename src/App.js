import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Guild from './pages/guild/guild';
import CrypToken from './pages/CrypToken/CrypToken';
import ScrollTo from './pages/ScrollTo';


function App() {
  return (
    <Router>
      <ScrollTo/>
      <Routes>
        <Route path="/Rakodi/" element={<Home />}/>
        <Route path='/guild' element={<Guild/>}/>
        <Route path='/token' element={<CrypToken/>}/>
      </Routes>
    </Router>
  );
}


export default App;
