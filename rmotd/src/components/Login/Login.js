import React, {useState} from 'react';
import logo from '../../logo.svg';

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
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
  );
}
