import React, { useState} from "react";

function CategoryFilter({ categories, tasks, setFilteredTasks }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.category === category);
      setFilteredTasks(filtered);
    }
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;
 