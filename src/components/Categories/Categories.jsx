import React from "react";
import styles from './../Card/Card/module.scss';

const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0)
const categories = ["Сlassic-cakes", "Biscuit-cakes", "Bento-cakes",]
    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((value, index) => (
                     <li key={index} onClick={() => onClickCategory(index)}className={activeIndex === index ? 'active' : ''}>{value}</li>
                ))} 
            </ul>
        </div>
    )
}
export default Categories;