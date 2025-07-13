import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';

export default function Header({ authenticated }) {
  const { toggle, theme } = useContext(ThemeContext);
  const { i18n } = useTranslation();

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
      <Link to="/" className="text-xl font-bold text-blue-600">PingU</Link>
      <div className="flex items-center space-x-4">
        <button onClick={() => i18n.changeLanguage(i18n.language === 'ro' ? 'en' : 'ro')} className="text-sm">
          {i18n.language === 'ro' ? 'EN' : 'RO'}
        </button>
        <button onClick={toggle} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        {authenticated ? (
          <Link to="/dashboard" className="text-sm">Dashboard</Link>
        ) : (
          <>
            <Link to="/login" className="text-sm">Login</Link>
            <Link to="/register" className="text-sm">Register</Link>
          </>
        )}
      </div>
    </header>
  );
}
