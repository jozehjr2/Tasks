import React from 'react';
import Users from '../data/Users';
import Tasks from '../data/Tasks';
import M from 'materialize-css';

export default (props) => {
  //Retorna uma lista de todas as tarefas em andamento
  function getTasksInProgress() {
    return Tasks.map((task) => {
      if (task.status == 'em andamento') {
        let resp = Users.find((element) => element.id == task.idUser); //Para identificar o responsável da tarefa
        return (
          <li key={task.id} className="collection-item task">
            <span className="title">
              <strong>TAREFA: </strong>
              {task.nameTask}
            </span>
            <p>
              <strong>RESPONSÁVEL:</strong> {resp.name}
            </p>
          </li>
        );
      }
    });
  }

  //Retorna uma lista de todas as tarefas concluídas
  function getTasksCompleted() {
    return Tasks.map((task) => {
      if (task.status == 'concluido') {
        let resp = Users.find((element) => element.id == task.idUser); //Para identificar o responsável da tarefa
        return (
          <li key={task.id} className="collection-item task">
            <span className="title">
              <strong>TAREFA: </strong>
              {task.nameTask}
            </span>
            <p>
              <strong>RESPONSÁVEL:</strong> {resp.name}
            </p>
          </li>
        );
      }
    });
  }

  return (
    <div className="row">
      <div className="col s12">
        <h2>Gerenciar tarefas</h2>
      </div>
      <div className="col s6">
        <h3>Em andamento</h3>
        <ul className="collection">{getTasksInProgress()}</ul>
      </div>
      <div className="col s6">
        <h3>Concluídas</h3>
        <ul className="collection">{getTasksCompleted()}</ul>
      </div>
    </div>
  );
};
