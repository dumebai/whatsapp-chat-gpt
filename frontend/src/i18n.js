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
=======
export const texts = {
  ro: {
    home: 'Acasă',
    login: 'Autentificare',
    register: 'Înregistrare',
    dashboard: 'Panou',
    welcome: 'Bine ai venit la PingU, CRM-ul tău pentru WhatsApp.',
    description: 'Gestionează contacte, programări și campanii prin WhatsApp.',
    getStarted: 'Începe',
    noAccount: 'Nu ai cont?',
    haveAccount: 'Ai deja cont?',
    contacts: 'Contacte',
    campaigns: 'Campanii',
    appointments: 'Programări',
    useCasesTitle: 'Cum te ajută PingU',
    crmUseCases: 'Gestionează rapid contactele și programările direct din WhatsApp.',
    marketingUseCases: 'Trimite campanii personalizate și remindere automate.',
    ctaTry: 'Încearcă gratuit',
    footerRights: '© 2025 PingU. Toate drepturile rezervate.',
    terms: 'Termeni de utilizare',
    privacy: 'Politica de confidențialitate',
    termsContent: 'Această pagină descrie Termenii de utilizare conform GDPR.',
    privacyContent: 'Această pagină descrie Politica de confidențialitate.',
  },
  en: {
    home: 'Home',
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    welcome: 'Welcome to PingU, your WhatsApp CRM.',
    description: 'Manage contacts, appointments and campaigns via WhatsApp.',
    getStarted: 'Get Started',
    noAccount: "Don't have an account?",
    haveAccount: 'Already have an account?',
    contacts: 'Contacts',
    campaigns: 'Campaigns',
    appointments: 'Appointments',
    useCasesTitle: 'How PingU Helps',
    crmUseCases: 'Manage contacts and appointments directly from WhatsApp.',
    marketingUseCases: 'Send personalized campaigns and automatic reminders.',
    ctaTry: 'Try for free',
    footerRights: '© 2025 PingU. All rights reserved.',
    terms: 'Terms of Use',
    privacy: 'Privacy Policy',
    termsContent: 'This page outlines the Terms of Use under GDPR.',
    privacyContent: 'This page describes our Privacy Policy.',
  },
};
