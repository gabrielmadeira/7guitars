import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/getPartsOfType" className="nav-link">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <header className="App-header">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/getPartsOfType" exact element={<Admin />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
