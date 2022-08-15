import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminPanel from './components/AdminPanel';
import GerenciarEstoque from './components/GerenciarEstoque';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className=" collapse navbar-collapse">
            <ul className=" navbarContainer navbar-nav mr-auto">
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
                <Link to="/adminPanel" className="nav-link">
                  Admin Panel
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/getPartsOfType" className="nav-link">
                  Gerenciar Estoque
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <header className="App-header">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/getPartsOfType" exact element={<GerenciarEstoque />} />
            <Route path="/adminPanel" exact element={<AdminPanel />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
