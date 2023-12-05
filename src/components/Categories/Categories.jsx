import React from "react";

const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0)
const categories = ["Сlassic-cakes", "Biscuit-cakes", "Bento-cakes",]
    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((value, i) => (
                     <li key={i} onClick={() => onClickCategory(i)}className={activeIndex === i ? 'active' : ''}>{value}</li>
                ))} 
            </ul>
        </div>
    )
}
export default Categories;