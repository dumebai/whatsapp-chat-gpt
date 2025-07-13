import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Users, Calendar, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Feature = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center p-4">
    <Icon size={32} className="text-blue-600 mb-2" />
    <p>{title}</p>
  </div>
);

export default function LandingPage({ authenticated }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <Header authenticated={authenticated} />
      <main className="flex-grow">
        <section className="py-20 text-center bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-800 dark:to-gray-700">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold mb-4">
            {t('heroTitle')}
          </motion.h1>
          <p className="mb-6">{t('heroSubtitle')}</p>
          <a href="/register" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            {t('getStarted')}
          </a>
        </section>
        <section className="py-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Feature icon={Users} title={t('features.contacts')} />
          <Feature icon={MessageSquare} title={t('features.support')} />
          <Feature icon={Calendar} title={t('features.calendar')} />
          <Feature icon={Megaphone} title={t('features.campaigns')} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
