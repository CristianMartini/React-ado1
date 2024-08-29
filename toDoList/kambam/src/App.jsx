import React, { useState } from 'react';
import Navbar from './components/NavBar';
import Sidebar from './components/SideBar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/global.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      status: 'A Fazer',
    };
    setTasks([...tasks, newTask]);
  };

  const onStatusChange = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <main className="content">
          <h1>Gerenciamento de Tarefas - Kanban</h1>
          <TaskForm addTask={addTask} />
          <div className="kanban-board">
            <TaskList tasks={tasks} status="A Fazer" onStatusChange={onStatusChange} removeTask={removeTask} />
            <TaskList tasks={tasks} status="Em Progresso" onStatusChange={onStatusChange} removeTask={removeTask} />
            <TaskList tasks={tasks} status="Concluído" onStatusChange={onStatusChange} removeTask={removeTask} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
