import React from "react";

function CategoryFilter({ selectedCategory, categories, handleCategoryFilter }) {

  function handleClick(){

  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button className={selectedCategory===category ? 'selected': null} onClick={() => handleCategoryFilter(category)} key={category}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
