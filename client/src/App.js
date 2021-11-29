import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Events from './components/Events';
import Contact from './components/Contact';
import Catering from './components/Catering';
import Footer from './components/Footer';
import Vip from './components/Vip';

// import StarRating from './components/StarRating';

function App() {

  // const [currentPage, setCurrentPage] = useState('about');

  // const renderPage =() => {
  //   switch(currentPage){
  //     case 'about':
  //       return <About />;
  //     case 'menu':
  //       return <Menu />;
  //     case 'events':
  //       return <Events />;
  //     case 'catering':
  //       return <Catering />;        
  //     case 'contact':
  //       return <Contact />;
  //     case 'vip':
  //       return <Vip />;
  //     default:
  //       return <About />;
  //   }
  // }

  // const handlePageChange = (page) => setCurrentPage(page);


  return (
    <Router basename='/'>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/about" component={About} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu}/>
          <Route path="/events.js" component={Events} />
          <Route path="/catering.js" component={Catering} />
          <Route path="/contact.js" component={Contact} />
          <Route path="/Vip.js" component={Vip} />
        </Routes>
        <Footer />
      </div>
    </Router>




    // <main>
    //   <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
    //   {renderPage()}
    //   {/* <StarRating /> */}
    //   <Footer />
    // </main>
  );
}

export default App;
