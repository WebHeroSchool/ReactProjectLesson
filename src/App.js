import logo from './logo.svg';
import './App.css';

const count =25;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: '#7FF02E',
          fontSize: '46px'
        }}>
          Hello World ! :)
        </p>
        <p>
          {count}
        </p>
        <p>
          {null}
          {undefined}
          {true}
          {false}
        </p>
        <p>
          {flag && 'Flag is True'}
        </p>
        <p>
          {flag ? 'Flag is True' : 'Flag is False'}
        </p>
        <p>
          {2+5}
        </p>
        <p>
          {777}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
