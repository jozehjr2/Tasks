import React from 'react';
import Users from '../data/Users';
import M from 'materialize-css';

export default (props) => {
  //Retorna uma lista de todos os usuários
  function getUsersList() {
    return Users.map((user) => {
      return (
        <li key={user.id}>
          <strong>ID:</strong> {user.id} | <strong>NOME:</strong> {user.name} |{' '}
          <strong>EMAIL:</strong> {user.email}
          <button className="waves-effect waves-light btn-small blue">
            Alterar
          </button>
          <button className="waves-effect waves-light btn-small red">
            Remover
          </button>
        </li>
      );
    });
  }

  //Adiciona um novo usuário
  function setUser(newName, newEmail, newPass) {
    Users.push({
      id: Users.length + 1,
      name: newName,
      email: newEmail,
      password: newPass,
    });
    console.log(Users.length);
  }

  //Remove um usuário
  function removeUser(id) {
    //console.log(Users);
  }

  return (
    <div className="container">
      <button className="waves-effect waves-light btn-small">Novo</button>
      <ul>{getUsersList()}</ul>
    </div>
  );
};
