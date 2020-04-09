import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchRecipes } from "../../actions/recipes";
import AddRecipeButton from "../InsertRecipe/AddRecipeButton";
import PageHeader from '../../components/PageHeader';
import RecipeCard from "./RecipeCard";
import Recipes from './Recipes';
import "./RecipesPage.scss";

const RecipesPage = () => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const {recipes, loading, error} = content.recipes;

  useEffect(() => { dispatch(asyncFetchRecipes()) }, []);

  const header = {
    title: 'Recipes',
    subtext: 'Find something delicous. Share your kitchen secrets',
    backgroundImage: 'mediterranean-cuisine-2378758_1280.jpg'
  };
  
  return (
    <div className="RecipesPage">
      <div className="header-wrapper">
        <PageHeader {...header} />
        <div className="action-btns">
          <AddRecipeButton />
        </div>
      </div>
      <Recipes />
    </div>
  );
};

export default RecipesPage;
