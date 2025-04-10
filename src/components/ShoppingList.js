import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';
import items from '../data/items';

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const itemsToDisplay = items.filter((item) =>
    selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
