import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  // console.log(tasks);
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        // console.log(task);
        return <ul>
          <Task key={index} task={task}/>
        </ul>
      })}
    </div>
  );
}

export default TaskList;
 