import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { asyncFetchRecipesByUser } from '../../actions/userRecipes';
import AddRecipeButton from '../InsertRecipe/AddRecipeButton';
import RecipeCard from '../Recipes/RecipeCard';

const MyRecipes = (user) => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const { userRecipes, loading, error } = content.userRecipes;
  
  useEffect(() => { dispatch(asyncFetchRecipesByUser(user.user.id)) }, []);
  
  const history = useHistory();
  const goToMyProfile = () => history.push('my-profile');
  
  return (
    <div className="MyRecipes">
      <h2>My Recipes</h2>
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
                  <img
                    src="https://maxst.icons8.com/vue-static/landings/animated-icons/icons/trash-bin/trash-bin.json"
                    alt="delete"
                  />
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

const mdtp = dispatch => bindActionCreators({ asyncFetchRecipesByUser }, dispatch);

export default connect(mstp, mdtp)(MyRecipes);
