import React from 'react';

function TaskItem({ task, onStatusChange, removeTask }) {
  const handleChangeStatus = (e) => {
    onStatusChange(task.id, e.target.value);
  };

  return (
    <div className="task-card">
      <p>{task.text}</p>
      <select value={task.status} onChange={handleChangeStatus}>
        <option value="A Fazer">A Fazer</option>
        <option value="Em Progresso">Em Progresso</option>
        <option value="Concluído">Concluído</option>
      </select>
      <button onClick={() => removeTask(task.id)}>Remover</button>
    </div>
  );
}

export default TaskItem;
