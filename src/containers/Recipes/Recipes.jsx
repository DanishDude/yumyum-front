import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { asyncFetchRecipes } from "../../actions/fetchRecipes";
import AddRecipeButton from "../InsertRecipe/AddRecipeButton";
import RecipeCard from "./RecipeCard";
import "./Recipes.scss";

const Recipes = () => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const {recipes, loading, error} = content.recipes;

  useEffect(() => { dispatch(asyncFetchRecipes()) }, []);
  
  return (
    <div className="Recipes">
      <h1> Here are the top rated recipes !</h1>
      <AddRecipeButton />
      {error !== "" ? <div>{error}</div> : ""}
      {!recipes && loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {recipes && recipes.length > 0 ? (
            recipes.map(recipe => (
              <li key={recipe.id}>
                <Link to={{pathname: `recipe/${recipe.id}`, state: {recipe: recipe}}}>
                  <RecipeCard recipe={recipe} />
                </Link>
              </li>
            ))
          ) : (
            <div>{"Sorry, there are no recipes today :-("}</div>
          )}
        </ul>
      )}
      
    </div>
  );
};

const mdtp = dispatch => bindActionCreators({ asyncFetchRecipes }, dispatch);

export default connect(null, mdtp)(Recipes);
