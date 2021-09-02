import React from 'react';
import Users from '../data/Users';

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
  return {
    /** Campos para inserção de novo usuário */
  };
};
