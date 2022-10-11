import React, {useState} from 'react';
import logo from '../../logo.svg';
import './App.css';

import Login from '../Login/Login';

function App() {
  const [token, setToken] = useState();

  const ws = new WebSocket("");

  // what an apiCall looks like
  //const apiCall = {
  //  event: "auth",
  //  data: { username: },
  //}

  if (!token) {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Roommate of the Day
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <Login setToken={setToken} />
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Roommate of the Day App Coming Soon!
        </p>
      </header>
    </div>
  );
}

export default App;
