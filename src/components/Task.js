import React, { useState } from "react";


function Task(task) {
  const [isDeleted, setIsDeleted] = useState(false)


  function handleDelete(){
    setIsDeleted(true)
  }


  const {category, text} = task.task
  
  return (
  <>
  {!isDeleted && (
    <div className="task">
    <div className="label">{category}</div>
    <div className="text">{text}</div>
    <button className="delete" onClick={handleDelete}>X</button>
    </div>
      )}
    </>
  );
}

export default Task;
 