import logo from './logo.svg';
import './App.css';
import M from 'materialize-css';
import Registering from './components/Registering';
import Navbar from './components/Navbar';
import ManageTasks from './components/ManageTasks';

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tasks</h1>
          <h4>Baseado no Trello</h4>
        </header>
        <Navbar />
        <Registering />
        <ManageTasks />
      </div>
    </div>
  );
}

export default App;
