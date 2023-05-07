import React from "react";

function Task({task, handleDelete}) {
  ///task removed when delete button is clicked
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => handleDelete(task)}>X</button>
    </div>
  );
}

export default Task;
