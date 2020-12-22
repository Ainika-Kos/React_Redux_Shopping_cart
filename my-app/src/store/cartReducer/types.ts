export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

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

interface InitialStoreCart {
  cart: Cart[];
}

export type AddToCart = {
  type: typeof ADD_TO_CART;
  cart: Cart;
};

export type RemoveFromCart = {
  type: typeof REMOVE_FROM_CART;
  cart: Cart;
};

export type AllActions = AddToCart | RemoveFromCart;

export interface RootStateCart extends InitialStoreCart {}
