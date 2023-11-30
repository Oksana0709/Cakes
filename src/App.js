import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import Card from './components/Card/Card';
import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">
    <Header />
    <Categories />
    <Sort />
    <Card title='Шоkoладный' price={15}/>
    <Home />
    </div>
  );
}

export default App;
