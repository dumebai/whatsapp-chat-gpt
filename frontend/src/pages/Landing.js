import React from 'react';
import { Link } from 'react-router-dom';
import { useText } from '../useText';

export default function Landing() {
  const t = useText();
  return (
    <div>
      <div className="hero">
        <h1>{t.welcome}</h1>
        <p>{t.description}</p>
        <svg width="200" height="200" viewBox="0 0 100 100" style={{margin:'2rem auto'}}>
          <circle cx="50" cy="50" r="45" fill="var(--color-primary)" />
          <ellipse cx="50" cy="70" rx="25" ry="15" fill="white" />
          <circle cx="40" cy="45" r="5" fill="white" />
          <circle cx="60" cy="45" r="5" fill="white" />
          <polygon points="50,55 45,65 55,65" fill="orange" />
        </svg>
        <Link to="/login" className="btn-primary">{t.getStarted}</Link>
      </div>
      <div className="section container text-center">
        <h2 className="text-2xl font-bold mb-6">{t.useCasesTitle}</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">{t.contacts}</h3>
            <p>{t.crmUseCases}</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">{t.campaigns}</h3>
            <p>{t.marketingUseCases}</p>
          </div>
        </div>
        <Link to="/register" className="btn-primary inline-block">{t.ctaTry}</Link>
      </div>
    </div>
  );
}
