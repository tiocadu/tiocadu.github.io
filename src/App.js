import React from 'react';
import avatar from './avatar.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-avatar" alt="avatar" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>
          I'm tiocadu and this site is under construction.
        </h1>
        <h2>
          I'm a Software Engineer currently working at
          <a
            className="Melvi-link"
            href="https://www.melvisaude.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Melvi
          </a>
          .
        </h2>
        <p>
          Feel free to follow or contact me by my social media:
          <a
            className="App-link"
            href="https://www.linkedin.com/in/cadurocha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,
          <a
            className="App-link"
            href="https://www.instagram.com/cadurochap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          ,
          <a
            className="App-link"
            href="https://github.com/tiocadu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p>
        <p>
          Or reach me by e-mail:
          <a 
            className="App-link"
            href="mailto:caduprocha@gmail.com"
          >
            caduprocha@gmail.com
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
