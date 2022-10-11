import React, {useState} from 'react';
import logo from '../../logo.svg';
import './App.css';

import Login from '../Login/Login';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Roommate of the Day
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="login-wrapper">
            <form>
              <label>
                <input type="text" placeholder="Username"/>
              </label>
              <label>
                <input type="password" placeholder="Password"/>
              </label>
              <div>
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
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
