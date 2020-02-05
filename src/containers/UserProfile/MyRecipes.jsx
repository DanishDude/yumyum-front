import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { asyncFetchDeleteRecipe, asyncFetchRecipesByUser } from '../../actions/recipes';
import AddRecipeButton from '../InsertRecipe/AddRecipeButton';
import PageHeader from '../../components/PageHeader';
import RecipeCard from '../Recipes/RecipeCard';
import './MyRecipes.scss';

let MyRecipes = (props) => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, token } = content.user;
  const { recipes, loading, error } = content.recipes;
  const userRecipes = recipes.filter(recipe => recipe.user_id === user.id);
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => { dispatch(asyncFetchRecipesByUser(token)) }, []);
  
  const goToMyProfile = () => history.push({pathname: 'my-account', state: {initialValues: user}});
  const modifyRecipe = recipe => history.push({pathname: 'create-recipe', state: recipe});
  const deleteRecipe = (recipeId) => {
    console.log(recipeId);
    
    // dispatch(asyncFetchDeleteRecipe(token, recipeId))
    toggle();
  };
  
  const header = {
    title: 'My Recipes',
    subtext: "Keep it fresh - update recipes anytime!"
  };

  return (
    <div className="MyRecipes">
      <div className="header-wrapper">
      <PageHeader {...header} />
        <div className="action-btns">
          <AddRecipeButton />
          <Button onClick={goToMyProfile}>My Profile</Button>
        </div> 
      </div>
      
      {error !== '' ? <div>Error loading your recipes</div> : ''}
      {!userRecipes && loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {userRecipes && userRecipes.length > 0 ? (
            userRecipes.map(userRecipe => (
              <li key={userRecipe.id}>
              <Button onClick={() => console.log(userRecipe.id, userRecipe.title)} >What am I</Button>
                <Link to={{pathname: `recipe/${userRecipe.id}`, state: {userRecipe}}}>
                  <RecipeCard recipe={userRecipe} />
                </Link>
                  <div className="icons">
                  <i className="fas fa-edit icon-edit" 
                    onClick={() => modifyRecipe(userRecipe)} >
                  </i>
                  <i className="fas fa-trash-alt icon-del" // ??? ALWAYS CAPTURES LAST RECIPE IN ARRAY ???
                    onClick={() => toggle()} >
                  </i>
                  </div>
                  <Modal isOpen={modal} toggle={toggle} className={className} backdrop={true} >
                    <ModalHeader toggle={toggle}>Confirm deleting this recipe</ModalHeader>
                    <ModalBody>
                      {userRecipe.title}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" onClick={() => deleteRecipe(userRecipe.id)}>Delete</Button>{' '}
                      <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
              </li>
            ))
          ) : ''}
        </ul>
      )}
    </div>
  );
};

const mstp = (state) => {
  return {
    user: state.user.user,
    token: state.user.token
  };
};

export default connect(mstp)(MyRecipes);
