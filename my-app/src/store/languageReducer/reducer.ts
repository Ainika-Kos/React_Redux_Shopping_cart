import { RootStateLanguage, AllActions, CHANGE_LANGUAGE } from './types';

const initialLanguage: RootStateLanguage = {
  language: 'en',
};

export const languageReducer = (state = initialLanguage, action: AllActions) =>  {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        language: action.language,
      };

    default:
      return state;
  }
};
