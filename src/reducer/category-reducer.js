import { categories } from '../store/data';
import { products } from '../store/data';
export const initialState = {
  categories: categories,
  activeCategory: {},
  products: products,
};

export const catProdReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT_CATEGORY':
      const categories = state.categories;
      const products = state.products;
      let activeCategory;
      state.categories.map((cat) => {
        if (cat.normalizedName == payload) {
          activeCategory = cat;
        }
      });

      return { categories, activeCategory, products };

    default:
      return state;
  }
};
