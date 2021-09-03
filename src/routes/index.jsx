import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Registering from '../components/Registering';
import ManageTasks from '../components/ManageTasks';
import NewUser from '../components/NewUser';
import Initial from '../components/Initial';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Initial} />

      {/* Página padrão/inicial
      = Cadastro de Usuário */}
      <Route path="/newuser" exact component={NewUser} />
      <Route path="/managetasks" exact component={ManageTasks} />
      <Route path="/registering" exact component={Registering} />
    </Switch>
  );
}
