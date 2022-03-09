import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {


const [selectedCategory, updateState] = useState("All")

function handleList(event) {
  updateState(event.target.value)
}

const newArr = items.filter((item) => {
  if (item.category === selectedCategory) {
    return item
  } else if (selectedCategory === "All") {
    return items
  }
})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleList}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
