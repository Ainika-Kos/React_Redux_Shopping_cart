import { RootState, AllActions, CHANGE_LANGUAGE } from './types';

const initialStore: RootState = {
  language: 'en',
};

export const reducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        language: action.language,
      };
    }
    default:
      return state;
  }
};
