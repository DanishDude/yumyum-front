import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addRecipe } from '../../actions/recipes';
import InsertRecipe from './InsertRecipe';
import './CreateRecipePage.scss';

class CreateRecipePage extends React.Component {
  addRecipe = (values) => {
    let fd = new FormData();
    for (const [key, value] of Object.entries(values)) {
      if (key === 'image') {
        fd.append('recipeImage', value, value.name);
      } else {
        fd.append(key, value);
      };
    };

    fetch('http://localhost:5000/api/recipe', {
      method: 'POST',
      body: fd
    })
    .then(res => {
      if (res.status === 500) {
        alert('Error adding recipe')
        console.log(res);
      } else if (res.status === 201) {
        return res.json();
      }
    })
    .then(recipe => (this.props.history.push(`/recipes`)))
    .catch(err => {
      alert(err);
      console.log(err);
    });
  }

  render() {
    
    return (
      <div className="CreateRecipePage">
        <InsertRecipe onSubmit={this.addRecipe} />
      </div>
    )};
};

const mstp = state => {
  return {
    recipes: state.recipes.recipes
  };
};

const mdtp = dispatch => bindActionCreators(
  { addRecipe }, dispatch);

export default connect(mstp, mdtp)(CreateRecipePage);
