
import Navbar from './components/NavBar';
import Sidebar from './components/SideBar';
import Home from './pages/Home';
import './styles/global.css';
import React, { useState } from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
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
          <h1>Gerenciamento de Tarefas</h1>
          <TaskForm addTask={addTask} />
          <TaskList
            tasks={tasks}
            toggleTaskCompleted={toggleTaskCompleted}
            removeTask={removeTask}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
