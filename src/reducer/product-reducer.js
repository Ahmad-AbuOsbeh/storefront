import { products } from '../store/data';

export const initialState = {
  products: products,
  filteredProducts: [],
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER_PRODUCTS':
      const filteredProducts = state.products.filter((product) => product.category == payload);
      const products = state.products;

      return { filteredProducts, products };

    default:
      return state;
  }
};
