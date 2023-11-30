import React from "react";
import styles from './Card.module.scss';

const Card = (props) => {
    return ( 
        <div className={styles.cakes}>
     <div className={styles.card}>
    <div>
        <img src="" alt="Favorite" />
    </div>
         <img className={styles.img__card}src="/images/chocolate_with_cherry.jpg" alt="Cake" />
           <h4>{props.title}</h4>
           <div>
            <div>
              <span>{props.price}</span>
              <b> dollars</b>
           </div>
            <img src=""  alt="button"/></div>
         </div>
         <div className={styles.card}>
    <div>
        <img src="" alt="Favorite" />
    </div>
         <img className={styles.img__card}src="/images/three_chocolates.jpg" alt="Cake" />
           <h5>title</h5>
           <div>
            <div>
              <span>Prise:</span>
              <b> dollars</b>
           </div>
            <img src=""  alt="button"/></div>
         </div>
         </div>

        
    )
}


export default Card;