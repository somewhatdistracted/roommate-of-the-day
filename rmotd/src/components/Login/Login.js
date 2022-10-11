import React, {useState} from 'react';
import logo from '../../logo.svg';

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login-wrapper">
      <form>
        <label>
          <input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
