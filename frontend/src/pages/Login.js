import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-800 dark:to-gray-700">
        <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">Welcome Back, Penguin</h2>
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
            Login
          </button>
          <p className="mt-3 text-sm text-center">
            No account? <Link className="text-blue-600" to="/register">Register</Link>
          </p>
        </div>
      </main>
      <Footer />
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
