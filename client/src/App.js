import React, {useState} from 'react';
import About from './components/About';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [currentPage, setCurrentPage] = useState('about');

  const renderPage =() => {
    switch(currentPage){
      case 'about':
        return <About />;
      case 'menu':
        return <Menu />;
      case 'events':
        return <Events />;
      case 'contact':
        return <Contact />
      default:
        return <About />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <main>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </main>
  );
}

export default App;
