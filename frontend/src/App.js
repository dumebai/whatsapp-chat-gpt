import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import './i18n';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (tok) => {
    setToken(tok);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage authenticated={!!token} />} />
          <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login onSuccess={handleLogin} />} />
          <Route path="/register" element={token ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
