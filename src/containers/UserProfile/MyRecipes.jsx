import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { asyncFetchRecipesByUser } from '../../actions/userRecipes';
import AddRecipeButton from '../InsertRecipe/AddRecipeButton';
import PageHeader from '../../components/PageHeader';
import RecipeCard from '../Recipes/RecipeCard';
import './MyRecipes.scss';

const MyRecipes = (user) => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const { userRecipes, loading, error } = content.userRecipes;
  
  useEffect(() => { dispatch(asyncFetchRecipesByUser(user.user.id)) }, []);
  
  const history = useHistory();
  const goToMyProfile = () => history.push('my-profile');

  // const editRecipe = ()

  const header = {
    title: 'My Recipes',
    subtext: "Keep it fresh - update recipes anytime!"
  };
  
  return (
    <div className="MyRecipes">
      <PageHeader {...header} />
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
                  <i className="fas fa-edit icon" ></i>
                  <i className="fas fa-trash-alt icon"></i>
                  </div>
              </li>
            ))
          ) : ''}
        </ul>
      )}
      <AddRecipeButton />
    </div>
  );
};

const mstp = (state) => {
  return {
    user: state.user.user
  };
};

export default connect(mstp)(MyRecipes);
