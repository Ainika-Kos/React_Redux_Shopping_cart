import { CHANGE_LANGUAGE, ChangeLanguage, Languages } from './types';

export const changeLanguage = (language: Languages): ChangeLanguage => {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
};



