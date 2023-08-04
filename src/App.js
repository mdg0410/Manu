import React from 'react';
import NavBar from './Components/NavBar';
import Headline from './Components/Headline';
import Works from './Components/Works';
import './Styles/App.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <Headline />
      <Works />
    </div>
  );
}
