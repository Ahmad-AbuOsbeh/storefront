import { categories } from '../store/data';
export const initialState = {
  categories: categories,
  activeCategory: {},
};

export const catProdReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT_CATEGORY':
      const categories = state.categories;
      let activeCategory;
      state.categories.map((cat) => {
        if (cat.normalizedName == payload) {
          activeCategory = cat;
        }
      });

      return { categories, activeCategory };

    default:
      return state;
  }
};
