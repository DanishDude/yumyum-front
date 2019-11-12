import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchRecipes } from '../../actions/fetchRecipes';
import RecipeCard from './RecipeCard';
import './Recipes.scss'

class Recipes extends Component {
  componentDidMount() {
    const { asyncFetchRecipes } = this.props;
    asyncFetchRecipes();
  }

  render() { 
    const { recipes, loading, error } = this.props;
    return ( 
      <div className="Recipes">
        <h1> Here are the top rated recipes !</h1>
        {error !== '' ? <div>{error}</div> : ''}
        {!recipes && loading ? <div>Loading...</div> : (
          <ul>
            {(recipes && recipes.length > 0)
            ? recipes.map(recipe => (
              <li key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </li>
            ))
            : <div>{'Sorry, there are no recipes today :-('}</div>}
          </ul>
        )}
      </div>
    );
  }
}

const mstp = state => ({
  loading: state.recipes.loading,
  recipes: state.recipes.recipes,
  error: state.recipes.error,
});

const mdtp = dispatch => bindActionCreators({ asyncFetchRecipes }, dispatch);
 
export default connect(mstp, mdtp)(Recipes);
