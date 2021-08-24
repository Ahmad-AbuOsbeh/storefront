export const initialState = {
  cartProducts: [],
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      return { cartProducts: [...state.cartProducts, payload] };
    case 'DELETE_FROM_CART':
      const cartProducts = state.cartProducts.filter((product) => product != payload);

      return { cartProducts };

    default:
      return state;
  }
};
