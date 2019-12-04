import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addRecipe } from '../../actions/addRecipe';
import CreateRecipe from './CreateRecipe';

class CreateRecipePage extends React.Component {
  /* const content = useSelector(state => state);
  const dispatch = useDispatch();
  const {recipes, loading, error, newRecipe} = content.recipes;
  let history = useHistory();

  const addRecipe = (newRecipe) => {
    useEffect(() => {
      dispatch(asyncFetchAddRecipe(newRecipe))
    }, []);
  }; */

  addRecipe = values => {
    const { addRecipe } = this.props
      fetch('http://localhost:5000/api/recipe', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      })
      .then(res => {
        if (res.status === 500) {
          alert('Error adding recipe')
          console.log(res);
        } else if (res.status === 201) {
          return res.json();
        }
      })
      .then(recipe => (
        this.props.history.push(`/recipes`)
      ))
      .catch(err => {
        alert(err);
        console.log(err);
      })
  }

  render() {
    return (
      <CreateRecipe onSubmit={this.addRecipe} />
  )};
};

const mstp = state => {
  return {
    recipes: state.recipes
  };
};

const mdtp = dispatch => bindActionCreators(
  { addRecipe }, dispatch);

export default connect(mstp, mdtp)(CreateRecipePage);
