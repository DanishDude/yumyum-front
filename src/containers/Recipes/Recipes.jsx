import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchRecipes } from "../../actions/recipes";
import RecipeCard from "./RecipeCard";
import RecipeTile from './RecipeTile';
import "./Recipes.scss";

const Recipes = () => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const {recipes, loading, error} = content.recipes;

  useEffect(() => { dispatch(asyncFetchRecipes()) }, []);
  
  return (
    <div className="Recipes">
      {error !== "" ? <div>{error}</div> : ""}
      {!recipes && loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {recipes && recipes.length > 0 ? (
            recipes.map(recipe => (
              <li key={recipe.id}>
                <Link to={ `recipe/${recipe.id}` }>
                  <RecipeCard recipe={recipe} />
                </Link>
              </li>
            ))
          ) : (
            <div>{"There was a problem loading recipes :-( Check your internet connection"
                  + " and reload the page"}</div>
          )}
        </ul>
      )}
    </div>
  );
};

export default Recipes;
