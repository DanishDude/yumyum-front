import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { asyncFetchDeleteRecipe, asyncFetchRecipesByUser } from "../../actions/recipes";
import AddRecipeButton from "../InsertRecipe/AddRecipeButton";
import DeleteRecipeCard from './DeleteRecipeCard';
import PageHeader from "../../components/PageHeader";
import RecipeCard from "../Recipes/RecipeCard";
import "./MyRecipes.scss";

const MyRecipes = props => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, token } = content.user;
  const { recipes, loading, error } = content.recipes;
  const userRecipes = recipes.filter(recipe => recipe.user_id === user.id);
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState({});
  const toggle = () => setModal(!modal);
  const getRecipeToDelete = recipe => setRecipeToDelete(recipe);

  useEffect(() => {
    dispatch(asyncFetchRecipesByUser(token));
  }, []);

  const goToMyProfile = () => history.push('/my-profile');
  const goToRecipe = recipe => history.push({ pathname: `/recipe/${recipe.id}`, state: recipe });
  const modifyRecipe = recipe => history.push({ pathname: "create-recipe", state: recipe });
  const deleteRecipe = recipeId => {
    dispatch(asyncFetchDeleteRecipe(token, recipeId));
    toggle();
  };

  const openDeleteRecipe = recipe => {
    getRecipeToDelete(recipe);
    toggle();
  };

  const header = {
    title: "My Recipes",
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

      {error !== "" ? <div>Error loading your recipes</div> : ""}
      {!userRecipes && loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {userRecipes && userRecipes.length > 0
            ? userRecipes.map(userRecipe => (
              <li key={userRecipe.id}>
                <Link to={{pathname: `recipe/${userRecipe.id}`, state: {userRecipe}}}>
                  <RecipeCard recipe={userRecipe} />
                </Link>
                <div className="icons">
                  <i
                    className="fas fa-edit icon-edit"
                    onClick={() => modifyRecipe(userRecipe)}
                  ></i>
                  <i
                    className="fas fa-trash-alt icon-del"
                    onClick={() => openDeleteRecipe(userRecipe)}
                  ></i>
                </div>
              </li>
            ))
            : ""}
        </ul>
      )}
      <Modal  toggle={toggle} isOpen={modal} className={className} centered >
        <ModalHeader toggle={toggle}><h3>Permanently delete this recipe?</h3></ModalHeader>
        <ModalBody>
          <DeleteRecipeCard recipe={recipeToDelete} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => deleteRecipe(recipeToDelete.id)}>
            Delete
          </Button>{" "}
          <Button color="primary" onClick={() => goToRecipe(recipeToDelete)}>View</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mstp = state => {
  return {
    user: state.user.user,
    token: state.user.token
  };
};

export default connect(mstp)(MyRecipes);
