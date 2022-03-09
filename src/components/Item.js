import React, {useState} from "react";

function Item({ name, category }) {

const [mode, changeState] = useState(false)

const buttonClass = mode ? "in-cart" : " "

function handleButtonClass() {
  changeState(mode => !mode)
}

  return (
    <li className={buttonClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButtonClass}>Add to Cart</button>
    </li>
  );
}

export default Item;
