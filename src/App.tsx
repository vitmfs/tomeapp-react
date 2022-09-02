import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComp from './components/test-component/test-component';
import TestCompTwo from './components/test-component-two/test-component-two';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Something
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



      <TestComp />
      <TestCompTwo name="some_name" id={4} />
    </div>
  );
}

export default App;
