import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import Card from './components/Card/Card';



function App() {
  const [items, setItems] =React.useState([]);

React.useEffect(() => {
  fetch('https://658dab4d7c48dce947399205.mockapi.io/items')
  .then((arr) => arr.json())
  .then((arr) => {
    setItems(arr);
  });
}, [])
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
      {items.map((obj) => (
         <Card key={obj.id}{...obj}/>
      ))}
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
