import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filteredTasks, setFilteredTasks] = useState(tasks)
  
  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      tasks={tasks}
      setFilteredTasks={setFilteredTasks}/>
      <NewTaskForm props={CATEGORIES}/>
      <TaskList tasks={filteredTasks}/>
    </div>
  );
}

export default App;
 