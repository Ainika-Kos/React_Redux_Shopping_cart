import { RootStateCart, AllActions, ADD_TO_CART, REMOVE_FROM_CART, Cart } from './types';

const initialCart: RootStateCart = {
  cart: [],
};

export const cartReducer = (state = initialCart, action: AllActions) => {
  switch (action.type) {
      
    case ADD_TO_CART: {
      const newCart: Cart = action.cart;
      const item = state.cart.find((it) => it.id === newCart.id);
      if (!item) {
        return {
          ...state,
          cart: state.cart.concat(newCart),
        };
      }
      const newState = { ...state };
      const index = newState.cart.indexOf(item);
      newState.cart[index].count += 1;
      newState.cart[index].sum =
        newState.cart[index].count * newState.cart[index].productPrice;
      return newState;
    }
    case REMOVE_FROM_CART: {
      const updatedCart: Cart[] = state.cart.filter(
        item => item.id !== action.cart.id
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    default:
      return state;
  }
};
