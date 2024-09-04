import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './todoSlice';
import { Task } from './Task';

export function ListTask() {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.todos);

  const filteredTasks = items.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true; // 'all' case
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('done'))}>Done</button>
        <button onClick={() => dispatch(setFilter('not_done'))}>Not Done</button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}