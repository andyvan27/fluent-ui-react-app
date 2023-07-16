import logo from './logo.svg';
import './App.css';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <DefaultButton text="Standard" onClick={_alertClicked} />
        <br/>
        <br/>
        <PrimaryButton text="Primary" onClick={_alertClicked} />
      </header>
    </div>
  );
}

function _alertClicked() {
  alert('Clicked');
}

export default App;
