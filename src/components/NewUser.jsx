import React from 'react';
import Users from '../data/Users';
import M from 'materialize-css';

/* document.getElementById('sendNewUser').addEventListener('click', function () {
  const theName = document.getElementById('name');
  const theEmail = document.getElementById('email');
  const thePass = document.getElementById('password');
  setUser(theName, theEmail, thePass);
  window.location.href = '/';
}); */

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

export default (props) => {
  return (
    <div className="row">
      <h3>Novo Usuário</h3>
      <form className="col s12 new-user">
        <input id="name" type="text" className="validate" placeholder="NOME" />

        <input
          id="email"
          type="email"
          className="validate"
          placeholder="EMAIL"
        />

        <input
          id="password"
          type="password"
          className="validate"
          placeholder="SENHA"
        />

        <br />
        <br />
        <button
          className="btn waves-effect waves-light"
          type="button"
          name="action"
          id="sendNewUser"
        >
          Enviar
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};
