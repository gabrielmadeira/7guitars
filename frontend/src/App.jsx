import React from 'react';
import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Biblioteca from './pages/Biblioteca';
import Carrinho from './pages/Carrinho';
import GerenciarEstoque from './pages/GerenciarEstoque';
import MeusPedidos  from './pages/MeusPedidos';
import MontarInstrumento  from './pages/MontarInstrumento';
import AnaliseDePedidos  from './pages/AnaliseDePedidos';
import AdminPanel from './components/AdminPanel';

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
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        {/* User Routes */ }
        <Route path="/montarinstrumento" exact element={<MontarInstrumento />} />
        <Route path="/biblioteca" exact element={<Biblioteca />} />
        <Route path="/carrinho" exact element={<Carrinho />} />
        <Route path="/meuspedidos" exact element={<MeusPedidos />} />
        {/* Adm Routes */ }
        <Route path="/gerenciarestoque" exact element={<GerenciarEstoque />} />
        <Route path="/analisedepedidos" exact element={<AnaliseDePedidos />} />
      </Routes>
    </div>
  );
}

export default App;
