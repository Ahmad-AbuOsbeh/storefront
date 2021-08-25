import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../reducer/actions';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { updateInStockHandler } from '../reducer/actions';
export default function SimpleCart() {
  const dispatch = useDispatch();
  const state = useSelector(({ cart, prod }) => ({
    cart: cart.cartProducts,
    prod: prod.products,
  }));

  function deleteHandler(productName) {
    let prodObject;
    state.prod.map((p) => (p.name == productName ? (prodObject = p) : false));
    prodObject.inStock = prodObject.inStock + 1;
    dispatch(updateInStockHandler(prodObject, 'delete'));
  }
  return (
    <div id='simple-cart'>
      <ul>
        {state.cart.map((product) => (
          <>
            <li id='li'>
              {product} <button onClick={() => deleteHandler(product)}>x</button>
              {/* <DeleteForeverIcon onClick={() => deleteHandler(product)}></DeleteForeverIcon> */}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
