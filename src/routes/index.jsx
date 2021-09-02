import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Registering from '../components/Registering';
import ManageTasks from '../components/ManageTasks';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Registering} />
      {/* Página padrão/inicial
      = Cadastro de Usuário */}
      <Route path="/managetasks" exact component={ManageTasks} />
    </Switch>
  );
}
