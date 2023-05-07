import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [taskState, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
    

function handleDelete(task){
 const taskFilter = taskState.filter(el => 
  el.text !== task.text)
  setTasks(taskFilter)
}

function handleCategoryFilter(cat){
  setSelectedCategory(cat)
}

let filteredTasks = [...taskState].filter(el => {
    return el.category === selectedCategory|| selectedCategory === "All"
  }
    )
 let filteredCategoryOption = [...CATEGORIES].map((category, i) => 
      category !== "All" ? <option key={i}>{category}</option> : null)
  
  ///form
  ///take input + category and add to task State

  function addToTaskList(task){
    setTasks([...taskState, task])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} categories={CATEGORIES} handleCategoryFilter={handleCategoryFilter}/>
      <NewTaskForm filteredCategoryOption={filteredCategoryOption} addToTaskList={addToTaskList}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
