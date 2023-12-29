import React from "react";
import styles from './../Card/Card.module.scss';

const Card = ({title, price, image}) => {
    const [cakeCount, cakeSetCount] = React.useState(0);
    const onClickAdd = () => {
        cakeSetCount(cakeCount + 1)
    }
    return ( 
        <div className={styles.cakes}>
     <div className={styles.card}>
    <div>
        <img src="" alt="Favorite" />
    </div>
         <img className={styles.img__card}src={image} alt="Cake" />
         <div>
            <ul>
                <li className="active">26 sm</li>
                <li className="active">30 sm</li>
                <li className="active">40 sm</li>
            </ul>
         </div>
           <h4 className="">{title}</h4>
           <div className="cake__block__bottom">
            <div cake__block__price>
              <span> from {price}</span>
              <b> dollars</b>
           </div>
           <div> 
           <button className={styles.card__buttom} onClick={onClickAdd}>
            <span>+ Add</span>
            <i>{cakeCount}</i>
            </button>
           </div>
        
            </div>
         </div>
 
         </div>
    )
}


export default Card;
