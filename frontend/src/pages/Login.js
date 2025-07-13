import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useText } from '../useText';

export default function Login({ onSuccess }) {
  const t = useText();
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
    <div className="min-h-screen section flex items-center justify-center">
      <div className="card w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">{t.login}</h2>
        {error && <p className="text-red-600 mb-2 text-center">{error}</p>}
        <input
          className="border w-full p-2 mb-3 rounded"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border w-full p-2 mb-3 rounded"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={login}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          {t.login}
        </button>
        <p className="mt-3 text-sm text-center">
          {t.noAccount} <Link className="text-blue-600" to="/register">{t.register}</Link>
        </p>
      </div>
    </div>
  );
}
