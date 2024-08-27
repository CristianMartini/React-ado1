import React from 'react';
import Navbar from './components/NavBar';
import Sidebar from './components/SideBar';
import Login from './components/Login';
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route
          path="/*"
          element={
            <div className="app-container">
              <Navbar />
              <Sidebar />
              <main className="content">
                <Home />
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
