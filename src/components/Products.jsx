import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterProducts } from '../reducer/actions';
import MediaCard from './card';
import { getProductsHandler } from '../reducer/actions';

function Products(props) {
  useEffect(() => {
    props.getProductsHandler();
  }, []);
  useEffect(() => {
    // console.log('hello from use effect');
    props.filterProducts(props.cat.activeCategory.name);
  }, [props.cat.activeCategory]);
  return (
    <div id='cards-container'>
      {props.prod.filteredProducts.map((product) => (
        <>
          <MediaCard key={product.name} product={product} />
        </>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.log('STATE???', state);
  return state;
};
const mapDispatchToProps = { filterProducts, getProductsHandler };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
