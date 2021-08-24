import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterProducts } from '../reducer/actions';
import MediaCard from './card';

function Products(props) {
  useEffect(() => {
    console.log('hello from use effect');
    props.filterProducts(props.cat.activeCategory.normalizedName);
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
  console.log('STATE???', state);
  return state;
};
const mapDispatchToProps = { filterProducts };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
