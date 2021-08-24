export function selectCategory(categorayName) {
  return {
    type: 'SELECT_CATEGORY',
    payload: categorayName,
  };
}

export function filterProducts(categorayName) {
  return {
    type: 'FILTER_PRODUCTS',
    payload: categorayName,
  };
}

export function addToCart(productName) {
  return {
    type: 'ADD_TO_CART',
    payload: productName,
  };
}

export function deleteFromCart(productName) {
  return {
    type: 'DELETE_FROM_CART',
    payload: productName,
  };
}
