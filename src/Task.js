import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask,deleteTask,editTask } from "./todoSlice";
export function Task({task}){
const dispatch=useDispatch()
const handleToggle=()=>{
    dispatch(toggleTask(task.id))
};
const handleDelete=()=>{
    dispatch(deleteTask(task.id))
};
const handleEdit = () => {
    const newDescription = prompt('Edit task description:', task.description);
    if (newDescription !== null) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }

  
  return (
    <div>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleToggle}>
        {task.isDone ? 'Mark as Not Done' : 'Mark as Done'}
      </button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
    };




}
