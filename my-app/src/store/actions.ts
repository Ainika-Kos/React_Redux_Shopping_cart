import { CHANGE_LANGUAGE, ChangeLanguage, Languages, Cart, ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const changeLanguage = (language: Languages): ChangeLanguage => {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
};

export const AddToCart = (cart: Cart) => {
  return {
    type: ADD_TO_CART,
    cart,
  };
};

export const RemoveFromCart = (cart: Cart) => {
  return {
    type: REMOVE_FROM_CART,
    cart,
  };
};

