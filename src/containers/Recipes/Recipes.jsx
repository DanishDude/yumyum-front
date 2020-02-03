import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchRecipes } from "../../actions/recipes";
import AddRecipeButton from "../InsertRecipe/AddRecipeButton";
import PageHeader from '../../components/PageHeader';
import RecipeCard from "./RecipeCard";
import "./Recipes.scss";

const Recipes = () => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const {recipes, loading, error} = content.recipes;

  useEffect(() => { dispatch(asyncFetchRecipes()) }, []);

  const header = {
    title: 'Recipes',
    subtext: 'Find something delicous. Share your kitchen secrets'
  };
  
  return (
    <div className="Recipes">
      <div className="header-wrapper">
        <PageHeader {...header} />
        <div className="action-btns">
          <AddRecipeButton />
        </div>
      </div>
      {error !== "" ? <div>{error}</div> : ""}
      {!recipes && loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {recipes && recipes.length > 0 ? (
            recipes.map(recipe => (
              <li key={recipe.id}>
                <Link to={{pathname: `recipe/${recipe.id}`/* , state: {recipe: recipe} */}}>
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

export default Recipes;
