import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { catProdReducer } from '../reducer/category-reducer';
import { productReducer } from '../reducer/product-reducer';
import { cartReducer } from '../reducer/cart-reducer';

const reducers = combineReducers({ cat: catProdReducer, prod: productReducer, cart: cartReducer });

export const store = createStore(reducers, composeWithDevTools());
