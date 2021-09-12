import React from 'react';
import ReactDOM from 'react-dom';
import M from 'materialize-css';

import Users from '../../data/Users';

class RemoveUser extends React.Component {
  constructor(props) {
    super(props);
    // Utilizando o `bind` para que o `this` funcione dentro da nossa callback
    this.handleClick = this.handleClick.bind(this);
    this.id = props.idUser;
    console.log(this.id);
  }

  handleClick() {
    this.removeUserFromList();
  }

  removeUserFromList(id) {
    //alert('Remover usuário: ' + this.id);
    let index = id !== 1 ? id - 1 : 1;
    Users.splice(index, 1);
    console.log(Users);
  }

  render() {
    return (
      <button
        className="waves-effect waves-light btn-small red"
        onClick={this.handleClick}
      >
        Remover
      </button>
    );
  }
}

ReactDOM.render(<RemoveUser />, document.getElementById('root'));

export default RemoveUser;
