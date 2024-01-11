import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainSection from './Main-section';
import './index.css';

function App () {
  return (
    <div className='page-container'>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App
