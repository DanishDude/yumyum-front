import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { asyncFetchDeleteRecipe, asyncFetchRecipesByUser } from '../../actions/recipes';
import AddRecipeButton from '../InsertRecipe/AddRecipeButton';
import PageHeader from '../../components/PageHeader';
import RecipeCard from '../Recipes/RecipeCard';
import './MyRecipes.scss';

let MyRecipes = (state) => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, token } = state;
  const { recipes, loading, error } = content.recipes;
  const userRecipes = recipes.filter(recipe => recipe.user_id === user.id);
  
  let redirect = false;
  let editRecipe = {};

  useEffect(() => { dispatch(asyncFetchRecipesByUser(token)) }, []);
  
  
  const goToMyProfile = () => history.push('my-profile');

  const modifyRecipe = recipe => {
    // history.push('create-recipe');
    console.log(recipe)
    editRecipe = recipe;
    redirect = true
    return <Redirect to={{pathname: '/create-recipe' }} state={editRecipe} />;
  };

  const deleteRecipe = (recipeId) => dispatch(asyncFetchDeleteRecipe(token, recipeId));
  
  const header = {
    title: 'My Recipes',
    subtext: "Keep it fresh - update recipes anytime!"
  };

  if (redirect) {
    console.log('rd', redirect);
    
    return (<Redirect to={{pathname: '/create-recipe' }} state={editRecipe} />);
  } else {
    console.log('rd', redirect);
    
    return (
      <div className="MyRecipes">
        <PageHeader {...header} />
        <AddRecipeButton />
        <Button onClick={goToMyProfile}>My Profile</Button>
        {error !== '' ? <div>{error}</div> : ''}
        {!userRecipes && loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {userRecipes && userRecipes.length > 0 ? (
              userRecipes.map(userRecipe => (
                <li key={userRecipe.id}>
                  <Link to={{pathname: `recipe/${userRecipe.id}`, state: {userRecipe}}}>
                    <RecipeCard recipe={userRecipe} />
                  </Link>
                    <div className="icons">
                    <i className="fas fa-edit icon" 
                      onClick={() => modifyRecipe(userRecipe)} >
                    </i>
                    <i className="fas fa-trash-alt icon"
                      onClick={() => deleteRecipe(userRecipe.id)} >
                    </i>
                    </div>
                </li>
              ))
            ) : ''}
          </ul>
        )}
      </div>
    );
  };
};

const mstp = (state) => {
  return {
    user: state.user.user,
    token: state.user.token
  };
};

export default connect(mstp)(MyRecipes);
