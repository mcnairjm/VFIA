import React, { Component } from 'react';
import loadable from '@loadable/component'
import './index.css';
import './App.css';
import NavBar from './Components/Navbar';
import Slideshow from './Components/Slide';
import Section from './Components/Section';
import Icons from './Components/Icons';
import About from './Components/About';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar />

      <Slideshow />

      <Section />

      <Icons />

      <About />

      <ContactForm />

      <Footer />
      
    </div>
  );
}

export default App;
