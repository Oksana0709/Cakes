import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
    <Header />
    <Card />
    <Home />
    </div>
  );
}

export default App;
