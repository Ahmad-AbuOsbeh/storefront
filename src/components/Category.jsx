import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../reducer/actions';
import { Button } from '@material-ui/core';

function Category(props) {
  function onClickHandler(categoryName) {
    props.selectCategory(categoryName);
  }
  return (
    <>
      <h4>Select Category:</h4>
      {props.categories.map((cat) => (
        <>
          <Button color='primary' onClick={() => onClickHandler(cat.normalizedName)}>
            {cat.normalizedName}
          </Button>
        </>
      ))}

      {props.activeCategory.normalizedName && <h2>Active Category : {props.activeCategory.normalizedName}</h2>}
      {/* <br /> */}
      {props.activeCategory.normalizedName && <h4 id='desc'> {props.activeCategory.description}</h4>}
    </>
  );
}
const mapStateToProps = (state) => {
  console.log('STATE???', state);
  return state.cat;
};
const mapDispatchToProps = { selectCategory };
export default connect(mapStateToProps, mapDispatchToProps)(Category);
