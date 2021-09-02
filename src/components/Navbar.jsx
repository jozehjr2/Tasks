import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import Registering from './Registering';
import ManageTasks from './ManageTasks';

export default (props) => {
  return (
    <nav>
      <div className="nav-top-header">
        <a className="waves-effect waves-light btn">
          <NavLink to="/">Cadastro</NavLink>
        </a>
        <a className="waves-effect waves-light btn">
          <NavLink to="/managetasks">Tarefas</NavLink>
        </a>
      </div>
    </nav>
  );
};
