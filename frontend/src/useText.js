import { useContext } from 'react';
import { AppContext } from './AppContext';
import { texts } from './i18n';

export const useText = () => {
  const { lang } = useContext(AppContext);
  return texts[lang];
};
