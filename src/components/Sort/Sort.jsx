import React from "react";

const Sort = () => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const list = ['популярности', 'цене', 'алфавиту'];
    const sortName = list[selected];

    const onClickListItem = (i) => {
        setSelected(i);
        setOpen(false);
    }
    return (
        <div className="sort">
<div className="sort__label">
    <svg xmlns="https://www.w3.org/2000/svg" ><path d="M105C10 5.16927 9.93815 5.31576 9.81445 5.4345C9.69075 5.56315 9.54427" fill="#2C2C2C"/></svg>
    <b>Сортровка по:</b>
    <span onClick={() => setOpen(!open)}> {sortName}</span>
</div>
{ open && ( 
    <div  className="sort__popup">
    <ul>
         {list.map((name, i) => (
        <li key={i} onClick={() => onClickListItem(i)} className={selected === i ? 'active' : ''}>{name}</li>
                ))} 
            </ul>
</div>)} 
        </div>
    )
}
export default Sort;