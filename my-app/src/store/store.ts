import { combineReducers, createStore } from 'redux';
import { languageReducer } from './languageReducer/reducer';
import { cartReducer } from './cartReducer/reducer';

const rootReducer = combineReducers({
  languageReducer,
  cartReducer,
});

export const store = createStore(rootReducer);

console.log('Store object:', store.getState());
