import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import { addTask } from "./todoSlice";
export function AddTask(){
    const [description,setDescription]=useState("");
    const dispatch=useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
          dispatch(addTask({ id: Date.now(), description, isDone: false }));
          setDescription('');
        }
        return (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add new task"
              />
              <button type="submit">Add Task</button>
            </form>
          );
        
        
        
        
        
      };
}