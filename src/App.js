import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import Home from './components/Home';
import News from './pages/News';
import Booking from './pages/Booking';
import CoatingWork from './pages/CoatingWork';
import Warranty from './pages/Warranty';
import Works from './pages/Works';
import Location from './pages/Location';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/coating-work" element={<CoatingWork />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/works" element={<Works />} />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
          <ContactButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App; 