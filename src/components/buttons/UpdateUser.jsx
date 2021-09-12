import React from 'react';
import ReactDOM from 'react-dom';
import M from 'materialize-css';

import Users from '../../data/Users';

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    // Utilizando o `bind` para que o `this` funcione dentro da nossa callback
    this.handleClick = this.handleClick.bind(this);
    this.id = props.idUser;
    console.log(this.id);
  }

  handleClick() {
    this.updateUserFromList();
  }

  updateUserFromList(id) {
    alert('Alterando usuário: ' + this.id);

    console.log(Users);
  }

  render() {
    return (
      <button
        className="waves-effect waves-light btn-small blue"
        onClick={this.handleClick}
      >
        Alterar
      </button>
    );
  }
}

ReactDOM.render(<UpdateUser />, document.getElementById('root'));

export default UpdateUser;
