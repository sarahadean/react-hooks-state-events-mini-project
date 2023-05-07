import React, { useSate } from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, i) => <Task key={i} task={task} handleDelete={handleDelete}/>)}
    </div>
  );
}

export default TaskList;
