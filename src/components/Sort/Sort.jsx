import React from "react";

const Sort = () => {
    return (
        <div className="sort">
<div className="sort__label">
    <svg alt=" svg"></svg>
    <b>Сортровка по:</b>
    <span>по популярности</span>
</div>
<div className="sort__popup">
    <ul>
        <li className="active">по популярности</li>
        <li>цене</li>
        <li>алфавиту</li>
    </ul>
</div>
        </div>
    )
}
export default Sort;