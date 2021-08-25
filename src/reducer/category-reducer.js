// import { categories } from '../store/data';
export const initialState = {
  categories: [],
  activeCategory: {},
};

export const catProdReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_CATEGORIES':
      return { categories: payload, activeCategory: state.activeCategory };

    case 'SELECT_CATEGORY':
      const categories = state.categories;
      let activeCategory;
      state.categories.map((cat) => {
        if (cat.name == payload) {
          activeCategory = cat;
        }
      });

      return { categories, activeCategory };

    default:
      return state;
  }
};
