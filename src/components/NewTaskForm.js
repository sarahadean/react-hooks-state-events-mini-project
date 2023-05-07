import React,{ useState } from "react";

function NewTaskForm({ filteredCategoryOption, addToTaskList }) {
const formOutline = {
  category: "code",
  text: " "
}
const [formState, setForm] = useState({formOutline})

  function handleChange(e){
    setForm({...formState, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    addToTaskList(formState)
    setForm(formOutline)
  }

  return (
    <form className="new-task-form" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Details
        <input onChange={e => handleChange(e)}type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {filteredCategoryOption}
        </select>
      </label>
      <input onChange={e => handleChange(e)} type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
