import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const register = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/register`, { email, password });
      setMessage(res.data.message);
      setError('');
    } catch (e) {
      setError(e.response?.data?.error || 'Registration failed');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100 p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Join the Penguin Colony</h2>
        {message && <p className="text-green-600 mb-2 text-center">{message}</p>}
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
          onClick={register}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Register
        </button>
        <p className="mt-3 text-sm text-center">
          Already have an account? <Link className="text-blue-600" to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
