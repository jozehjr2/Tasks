import React from 'react';
import Users from '../data/Users';
import M from 'materialize-css';

export default (props) => {
  return (
    <div className="row">
      <div className="col s12">Gerenciar tarefas</div>
      <div className="col s6">
        <h3>Em andamento</h3>
        <span>asdfasdf</span>
        <br />
        <span>asdfasdf</span>
        <br />
        <span>asdfasdf</span>
        <br />
        <span>asdfasdf</span>
        <br />
        <span>asdfasdf</span>
        <br />
        <span>asdfasdf</span>
        <br />
      </div>
      <div className="col s6">
        <h3>Concluídas</h3>
        <span>asdfasdf</span>
        <br />
        <span>asdfasdf</span>
        <br />
        <span>asdfasdf</span>
        <br />
        <span>asdfasdf</span>
        <br />
        <span>asdfasdf</span>
        <br />
        <span>asdfasdf</span>
        <br />
      </div>
    </div>
  );
};
