import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../reducer/actions';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getCategoriesHandler } from '../reducer/actions';

function Category(props) {
  const dispatch = useDispatch();
  //onClickHandler
  function onClickHandler(categoryName) {
    props.selectCategory(categoryName);
  }
  //Did Mount
  useEffect(() => {
    dispatch(getCategoriesHandler());
  }, []);
  return (
    <>
      <h4>Select Category:</h4>
      {props.categories.map((cat) => (
        <>
          <Button color='primary' onClick={() => onClickHandler(cat.name)}>
            {cat.name}
          </Button>
        </>
      ))}

      {props.activeCategory.name && <h2>Active Category : {props.activeCategory.name}</h2>}
      {/* <br /> */}
      {props.activeCategory.name && <h4 id='desc'> {props.activeCategory.description}</h4>}
    </>
  );
}
const mapStateToProps = (state) => {
  // console.log('STATE???', state);
  return state.cat;
};
const mapDispatchToProps = { selectCategory };
export default connect(mapStateToProps, mapDispatchToProps)(Category);
