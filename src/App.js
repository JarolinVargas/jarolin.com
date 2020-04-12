import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li className="nav-separator"></li>
          <li><a href="#">ABOUT ME</a></li>
          <li className="nav-separator"></li>
          <li><a href="#">PROJECTS</a></li>
          <li className="nav-separator"></li>
          <li><a href="#">THOUGHTS</a></li>
          <li className="nav-separator"></li>
        </ul>
      </nav>
      <div className="frame"></div>
      <div className="content">

      </div>
    </div>
  );
}

export default App;
