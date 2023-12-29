import React from "react";
import Categories from './../components/Categories/Categories';
import Sort from './../components/Sort/Sort';
import Card from './../components/Card/Card';
import Skeleton from './../components/CakeBlock/Skeleton';

const Home = () => {
    React.useEffect(() => {
        fetch('https://658dab4d7c48dce947399205.mockapi.io/items')
        .then((arr) => arr.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
      }, [])

const [items, setItems] =React.useState([]);
  const [isloading, setIsLoading] =React.useState(true);
 return (
<>
<div className='container'>
      <div className='content__top'>
    <Categories />
    <Sort />
    </div>
    <h2 className='content__title'>All cakes</h2>
    <div className='content__items'>
      {isloading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) : 
      items.map((obj) => 
         <Card key={obj.id}{...obj}/>)}
    </div>
    </div>
</>


 )
}

export default Home;