import logo from './logo.svg';
import './App.css';
import React from 'react';
import Menu from './components/Menu';
import Search from './components/Search';
import Footer from './components/Footer';


function App() {
  
  
  return (
    <>
      <Menu />
      <div className="App pb-5">
        <Search />
        <Footer />
      </div>
    </>
  );
}

export default App;
