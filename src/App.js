import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import M from 'materialize-css';
import Routes from './routes/index';
import Registering from './components/Registering';
import Navbar from './components/Navbar';
import ManageTasks from './components/ManageTasks';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Tasks</h1>
            <h4>Baseado no Trello</h4>
          </header>
          <Navbar />
          <Routes />
        </div>{' '}
        <footer>
          <p>
            <strong>2021. Todos os direitos reservados.</strong>{' '}
          </p>
          <p>
            <em>Desenvolvido por J. Jr.</em>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
