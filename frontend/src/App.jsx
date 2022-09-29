import React from 'react';
import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import AdminPanel from './components/AdminPanel';
import GerenciarEstoque from './components/GerenciarEstoque';

function App() {
  return (
    <div className="App">
      {/* <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
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
      </nav> */}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/getPartsOfType" exact element={<GerenciarEstoque />} />
        <Route path="/adminPanel" exact element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
