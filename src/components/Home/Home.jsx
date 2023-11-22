import React from "react";
import styles from './Home.module.scss';
import Card from '../Card/Card';


const Home = () => {

<div className={styles.content}>
<div className={styles.search__block}>
  <h1 className={styles.cakes}> Cakes</h1>
  <input  placeholder="Search..."></input>
<img className={styles.clear} src="/img/buttonAdd.p" alt="Clear"/>
</div>
<div className={styles.cards__cakes}>
    <Card/>
</div>
</div> 
}


export default Home;