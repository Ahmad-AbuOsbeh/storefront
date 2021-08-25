import superagent from 'superagent';

const categoryAPI = 'https://api-js401.herokuapp.com/api/v1/categories';
const peoductsAPI = 'https://api-js401.herokuapp.com/api/v1/products';

//selectCategory
export function selectCategory(categorayName) {
  return {
    type: 'SELECT_CATEGORY',
    payload: categorayName,
  };
}

//getCategories
export function getCategories(categories) {
  return {
    type: 'GET_CATEGORIES',
    payload: categories,
  };
}

//getProducts
export function getProducts(products) {
  return {
    type: 'GET_PRODUCTS',
    payload: products,
  };
}
//filterProducts
export function filterProducts(categorayName) {
  return {
    type: 'FILTER_PRODUCTS',
    payload: categorayName,
  };
}

//addToCart
export function addToCart(productName) {
  return {
    type: 'ADD_TO_CART',
    payload: productName,
  };
}

//deleteFromCart
export function deleteFromCart(productName) {
  return {
    type: 'DELETE_FROM_CART',
    payload: productName,
  };
}

// Async Thunk Functions

// getCategoriesHandler
export function getCategoriesHandler() {
  return async function (dispatch) {
    const response = await superagent.get(`${categoryAPI}`);
    const categories = response.body.results;

    dispatch(getCategories(categories));
  };
}

// getProductsHandler
export function getProductsHandler() {
  console.log('get products from API');
  return async function (dispatch) {
    const response = await superagent.get(`${peoductsAPI}`);
    const products = response.body.results;

    dispatch(getProducts(products));
  };
}

// updateInStockHandler
export function updateInStockHandler(prodObj, actionType) {
  return async function (dispatch) {
    console.log('prodObj._id', prodObj._id);
    const response = await superagent.put(`${peoductsAPI}/${prodObj._id}`, prodObj);
    const products = response.body;
    console.log('updated product', products);

    if (actionType == 'delete') {
      dispatch(deleteFromCart(prodObj.name));
    } else if (actionType == 'add') {
      dispatch(addToCart(prodObj.name));
    }
  };
}
