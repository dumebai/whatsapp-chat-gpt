import React from 'react';
import { useText } from '../useText';

export default function Privacy() {
  const t = useText();
  return (
    <div className="section container">
      <h2 className="text-2xl font-bold mb-4">{t.privacy}</h2>
      <p>{t.privacyContent}</p>
    </div>
  );
}
