import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncFetchRecipes } from "../../actions/recipes";
import AddRecipeButton from "../InsertRecipe/AddRecipeButton";
import PageHeader from '../../components/PageHeader';
import Recipes from './Recipes';
import "./RecipesPage.scss";

const RecipesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => { dispatch(asyncFetchRecipes()) }, []);

  const header = {
    title: 'Recipes',
    subtext: 'Find something delicous. Share your kitchen secrets',
    backgroundImage: 'table-on-wooden-plank-326279.jpg'
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
