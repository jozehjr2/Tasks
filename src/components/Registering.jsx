import React from 'react';
import Users from '../data/Users';
import M from 'materialize-css';
import { NavLink } from 'react-router-dom';
import RemoveUser from './buttons/RemoveUser';
import UpdateUser from './buttons/UpdateUser';

export default (props) => {
  //Retorna uma lista de todos os usuários
  function getUsersList() {
    return Users.map((user) => {
      return (
        <li key={user.id} className="collection-item user-list">
          <p>
            <strong>ID:</strong> {user.id} | <strong>NOME:</strong> {user.name}{' '}
            | <strong>EMAIL:</strong> {user.email}
          </p>
          <UpdateUser idUser={user.id} />
          <RemoveUser idUser={user.id} />
        </li>
      );
    });
  }

  return (
    <div className="container">
      <h3>Usuários</h3>
      <button className="waves-effect waves-light btn-small">
        <NavLink to="/newuser">Novo</NavLink>
      </button>
      <ul className="collection">{getUsersList()}</ul>
    </div>
  );
};
