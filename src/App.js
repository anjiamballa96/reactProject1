import logo from './logo.svg';
import './App.css';
import Screensize from './components/Screensize';
import FormExample from './components/FormExample';
import Multistate from './components/Multistate';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>*/}
      <FormExample />
      {/* <Multistate /> */}
    </div>
  );
}

export default App;
