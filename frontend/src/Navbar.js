import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';
import { useText } from './useText';

export default function Navbar() {
  const { theme, setTheme, lang, setLang } = useContext(AppContext);
  const t = useText();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleLang = () => setLang(lang === 'ro' ? 'en' : 'ro');

  return (
    <nav className="navbar">
      <div>
        <Link to="/">PingU</Link>
      </div>
      <div>
        <Link to="/login">{t.login}</Link>
        <Link to="/register">{t.register}</Link>
        <Link to="/dashboard">{t.dashboard}</Link>
        <button className="theme-toggle" onClick={toggleTheme}>{theme === 'light' ? '🌞' : '🌜'}</button>
        <button className="lang-toggle" onClick={toggleLang}>{lang.toUpperCase()}</button>
      </div>
    </nav>
  );
}
