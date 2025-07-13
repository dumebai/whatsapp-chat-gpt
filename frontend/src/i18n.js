import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ro: {
    translation: {
      heroTitle: 'Gestionati relatiile cu clientii prin WhatsApp',
      heroSubtitle: 'PingU va ajuta sa administrati contacte, suport, programari si campanii intr-o singura aplicatie.',
      getStarted: 'Incepe acum',
      features: {
        contacts: 'Contacte',
        support: 'Suport clienti',
        calendar: 'Programari',
        campaigns: 'Campanii marketing'
      },
      pricing: 'Preturi',
    }
  },
  en: {
    translation: {
      heroTitle: 'Manage customer relationships through WhatsApp',
      heroSubtitle: 'PingU helps you handle contacts, support, scheduling and campaigns in one app.',
      getStarted: 'Get Started',
      features: {
        contacts: 'Contacts',
        support: 'Support',
        calendar: 'Appointments',
        campaigns: 'Campaigns'
      },
      pricing: 'Pricing',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ro',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
