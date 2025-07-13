import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      onSuccess(res.data.token);
    } catch (e) {
      setError('Login failed');
    }
  };

  return (
    <div>
      <h2>PingU.RO Login</h2>
      {error && <p style={{color:'red'}}>{error}</p>}
      <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
