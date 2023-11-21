import React from "react";
// import styles from './Home.module.scss';
import Card from '../Card/Card';


const Home = () => {

<div className="content">
<div className="search__block">
  <h1 className="cakes"> </h1>
  <input  placeholder="Search..."></input>
<img className="clear" src="/img/buttonAdd.png" alt="Clear"/>
</div>
<div className="cards__cakes">
    <Card/>
</div>
</div> 
}


export default Home;