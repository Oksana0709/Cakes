import React from "react";
import styles from './Card.module.scss';

const Card = ({title, price, image}) => {
    return ( 
        <div className={styles.cakes}>
     <div className={styles.card}>
    <div>
        <img src="" alt="Favorite" />
    </div>
         <img className={styles.img__card}src={image} alt="Cake" />
           <h4>{title}</h4>
           <div>
            <div>
              <span>{price}</span>
              <b> dollars</b>
           </div>
            <img src=""  alt="button"/></div>
         </div>
 
         </div>
    )
}


export default Card;
