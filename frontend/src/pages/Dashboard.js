import React from 'react';

const Section = ({ title, children }) => (
  <section className="bg-white rounded shadow p-4 mb-4">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {children}
  </section>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 p-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Penguin Dashboard</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <Section title="Contacts">
          <p>Contact list placeholder</p>
        </Section>
        <Section title="Campaigns">
          <p>Campaign composer placeholder</p>
        </Section>
        <Section title="Appointments">
          <p>Appointment scheduler placeholder</p>
        </Section>
      </div>
    </div>
  );
}
