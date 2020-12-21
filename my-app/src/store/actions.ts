import { CHANGE_LANGUAGE, ChangeLanguage, Languages } from './types';
// import { CHANGE_LANGUAGE, ChangeLanguage, Languages, Cart, ADD_TO_CART } from './types';

export const changeLanguage = (language: Languages): ChangeLanguage => {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
};

// export const AddToCart = (cart: Cart): AddToCart => {
//   return {
//     type: ADD_TO_CART,
//     cart,
//   };
// };

