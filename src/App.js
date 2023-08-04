import React from 'react';
import NavBar from './Components/NavBar';
import Headline from './Components/Headline';
import Works from './Components/Works';
import AboutMySelf from './Components/AboutMySelf';
import Contact from './Components/Contact';
import './Styles/App.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <Headline />
      <Works />
      <AboutMySelf />
      <Contact />
    </div>
  );
}
