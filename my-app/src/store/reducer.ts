import { RootState, AllActions, CHANGE_LANGUAGE, ADD_TO_CART } from './types';

const initialStore: RootState = {
  language: 'en',
  // cart: Cart[],
};

export const reducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        language: action.language,
      };
    }
    // case ADD_TO_CART: {
    //   return {
    //     [...cart],
    //     ...action.cart
    //   };
    // }
    default:
      return state;
  }
};
