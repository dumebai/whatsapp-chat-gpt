import React from 'react';
import { useText } from '../useText';

const Section = ({ title, children }) => (
  <section className="card">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {children}
  </section>
);

export default function Dashboard() {
  const t = useText();
  return (
    <div className="min-h-screen section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">{t.dashboard}</h2>
        <div className="space-y-4">
          <Section title={t.contacts}>
            <p>Contact list placeholder</p>
          </Section>
          <Section title={t.campaigns}>
            <p>Campaign composer placeholder</p>
          </Section>
          <Section title={t.appointments}>
            <p>Appointment scheduler placeholder</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
