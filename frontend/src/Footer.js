import React from 'react';
import { Link } from 'react-router-dom';
import { useText } from './useText';

export default function Footer() {
  const t = useText();
  return (
    <footer className="footer">
      <div className="container flex justify-between items-center flex-wrap">
        <p className="mb-2">{t.footerRights}</p>
        <div>
          <Link to="/terms" className="mr-4 hover:underline">
            {t.terms}
          </Link>
          <Link to="/privacy" className="hover:underline">
            {t.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
