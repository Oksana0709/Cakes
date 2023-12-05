import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import Card from './components/Card/Card';
import cakes from './assets/cakes.json';



function App() {
  return (
    <div className="wrapper">
    <Header />
    <div className='content'>
    <div className='container'>
      <div className='content__top'>
    <Categories />
    <Sort />
    </div>
    <h2 className='content__title'>All cakes</h2>
    <div className='content__items'>
      {cakes.map((obj) => (
         <Card key={obj.id}{...obj}/>
      ))}
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
