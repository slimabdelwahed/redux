import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:"todos",
    initialState:{
        items:[],
        filter:"all"
    },
    reducers:{
        addTask:(state,action)=>{
            state.items.push(action.payload)
        },
        toggleTask:(state,action)=>{
            const task = state.items.find (task=>task.id===action.payload);
            if (task) {
                task.isDone = !task.isDone;
              }
              

              },
              deleteTask:(state,action)=>{
                state.items=state.items.filter(task=>task.id!==action.payload);
        },
        editTask:(state,action)=>{
            const{id,description}=action.payload;
            const task = state.items.find (task=>task.id===id);
            if(task){
                task.description=description
            }

        },
        setFilter:(state,action)=>{
            state.filter=action.payload
        }


    }
})
export const{addTask,toggleTask,deleteTask,editTask,setFilter}=todoSlice.actions
export default todoSlice.reducer;