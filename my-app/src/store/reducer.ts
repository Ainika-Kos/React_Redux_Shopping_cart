import { RootState, AllActions, CHANGE_LANGUAGE, ADD_TO_CART, REMOVE_FROM_CART, Cart } from './types';

const initialStore: RootState = {
  language: 'en',
  cart: [],
};

export const reducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        language: action.language,
      };
    }
      
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
