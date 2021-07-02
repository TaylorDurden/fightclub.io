import React from 'react';
import logo from './assets/logo.png';
import background from './assets/background.jpeg';
import './App.css';

var backgroundStyle = {
  background: `url(${background}) no-repeat`,
  backgroundSize: "100% 100%"
}

function App() {
  return (
    <div className="App" style={backgroundStyle}>
      <header className="App-header">
        <a href="">
          <img src={logo} className="App-logo" alt="Join in Fight Club" />
        </a>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          It's only after we've lost everything that we're free to do anything.
        </a>
      </header>
    </div>
  );
}

export default App;
