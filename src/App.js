import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Doctors from './components/Doctors';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Technology />
              <About />
              <Doctors />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <About />
              <Footer />
            </>
          } />
          <Route path="/AboutPage" element={
            <>
              <AboutPage />
              <Footer />
            </>
          } />
          <Route path="/doctors" element={
            <>
              <Doctors />
              <Footer />
            </>
          } />
          <Route path="/technology" element={
            <>
              <Technology />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
