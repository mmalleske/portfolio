import React from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './components/background/Background';
import Nav from './components/nav/Nav';
import Title from "./components/title/Title";

function App() {
  return (
    <div className="App">
      <Background />
      <Nav />
      <Title />
    </div>
  );
}

export default App;
