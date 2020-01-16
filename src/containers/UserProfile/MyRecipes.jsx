import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import {
  asyncFetchDeleteRecipe, asyncFetchRecipesByUser, initializeModifyRecipe
} from '../../actions/recipes';
import AddRecipeButton from '../InsertRecipe/AddRecipeButton';
import PageHeader from '../../components/PageHeader';
import RecipeCard from '../Recipes/RecipeCard';
import './MyRecipes.scss';

let MyRecipes = (state) => {
  const { token } = state;
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const { userRecipes, loading, error } = content.recipes;
  let redirect = false;
  let editRecipe = {};
  
  useEffect(() => { dispatch(asyncFetchRecipesByUser(token)) }, []);
  
  const history = useHistory();
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
    token: state.user.token
  };
};

export default connect(mstp)(MyRecipes);
