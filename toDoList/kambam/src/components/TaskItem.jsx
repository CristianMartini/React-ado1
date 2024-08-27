import React from 'react';

function TaskItem({ task, toggleTaskCompleted, removeTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompleted(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)}>Remover</button>
    </li>
  );
}

export default TaskItem;
