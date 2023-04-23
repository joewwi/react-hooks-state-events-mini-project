import React, { useState } from "react";

function NewTaskForm({props}) {
  const [ categories, setCategories] = useState(props)

  const [taskText, setTaskText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Work")
  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { text: taskText, category: selectedCategory };
    onTaskFormSubmit(newTask);
    setTaskText("");
  };

  // console.log(category);
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTaskTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => {
            if (category !== "All") {
              return <option key={category}>{category}</option>;
            }
            return null;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
 