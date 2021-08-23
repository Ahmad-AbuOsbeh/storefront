export const initialState = {
  filteredProducts: [],
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER_PRODUCTS':
      const filteredProducts = payload.allProducts.filter((product) => product.category == payload.categorayName);

      return { filteredProducts };

    default:
      return state;
  }
};
