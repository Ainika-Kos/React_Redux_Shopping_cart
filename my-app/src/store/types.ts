export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export type Languages = 'lv' | 'en';

export type Cart = {
  id: number;
  image: string;
  productName: string;
  productCategory: string;
  productDescription: string;
  productPrice: number;
  count: number;
  sum: number;
};

interface InitialStore {
  language: Languages;
  cart: Cart[];
}

export type ChangeLanguage = {
  type: typeof CHANGE_LANGUAGE;
  language: Languages;
};

export type AddToCart = {
  type: typeof ADD_TO_CART;
  cart: Cart;
};

export type RemoveFromCart = {
  type: typeof REMOVE_FROM_CART;
  cart: Cart;
};

export type AllActions = ChangeLanguage | AddToCart | RemoveFromCart;

export interface RootState extends InitialStore {}
