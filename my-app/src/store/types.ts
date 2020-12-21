export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const ADD_TO_CART = 'ADD_TO_CART';

export type Languages = 'lv' | 'en';

// export type Cart = {
//   id: number;
//   image: string;
//   productName: string;
//   productCategory: string;
//   productDescription: string;
//   productPrice: number | undefined;
// };

interface InitialStore {
  language: Languages;
  // cart: Cart[];
}

export type ChangeLanguage = {
  type: typeof CHANGE_LANGUAGE;
  language: Languages;
};

// export type AddToCart = {
//   type: typeof ADD_TO_CART;
//   cart: Cart[];
// };

export type AllActions = ChangeLanguage;

// export type AllActions = ChangeLanguage | AddToCart;

export interface RootState extends InitialStore {}
