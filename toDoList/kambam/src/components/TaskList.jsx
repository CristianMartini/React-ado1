import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, status, onStatusChange, removeTask }) {
  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div className="kanban-column">
      <h2>{status}</h2>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
