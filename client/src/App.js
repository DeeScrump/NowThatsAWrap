import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Menu from './components/Menu';
import Online from './components/Online';
import MenuItem from './components/MenuItem';
import NavBar from './components/NaviBar';
import Events from './components/Events';
import Contact from './components/Contact';
import Catering from './components/Catering';
import Vip from './components/Vip';
import Footer from './components/Footer';
// import StarRating from './components/StarRating';

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Menu" element={<Menu />}/>
          <Route path="/MenuItem" element={<MenuItem />}/>
          <Route path="/Online" element={<Online />}/>
          <Route path="/Events" element={<Events />}/>
          <Route path="/Catering" element={<Catering />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Vip" element={<Vip />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
