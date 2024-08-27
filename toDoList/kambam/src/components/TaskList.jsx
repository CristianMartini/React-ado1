import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTaskCompleted, removeTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompleted={toggleTaskCompleted}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
