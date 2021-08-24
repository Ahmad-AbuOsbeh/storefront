import { products } from '../store/data';

export const initialState = {
  products: products,
  filteredProducts: [],
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let filteredProducts;
  let products;
  switch (type) {
    case 'FILTER_PRODUCTS':
      products = state.products;
      filteredProducts = state.products.filter((product) => product.category == payload);

      return { filteredProducts, products };
    case 'ADD_TO_CART':
      products = state.products;
      filteredProducts = state.filteredProducts.map((product) => {
        if (product.name == payload) {
          product.inventoryCount = product.inventoryCount - 1;
        }
        return product;
      });

      return { filteredProducts, products };

    case 'DELETE_FROM_CART':
      products = state.products;
      filteredProducts = state.filteredProducts.map((product) => {
        if (product.name == payload) {
          product.inventoryCount = product.inventoryCount + 1;
        }
        return product;
      });

      return { filteredProducts, products };

    default:
      return state;
  }
};
