import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

// title, description, image, ingredient, prep time, cook time, tag list, instructions

let CreateRecipe = props => {
  const { handleSubmit } = props;
  let history = useHistory();
  const goToRecipes = () => history.push('/recipes');

  return (
    <div className="CreateRecipe">
      <Button type="button" onClick={goToRecipes}>Cancel</Button>
      <h3>Share your recipe</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="title" component="input" type="text" placeholder="Recipe title" />
        </div>
        <div>
          <Field name="description" component="input" type="textarea" 
                 placeholder="Share your storey... Where does this recipe come from? Why is it special?
                 Who else would love it?" />
        </div>
        <div>
          <Field name="ingredient_list" component="input" type="text" placeholder="carrots" />
        </div>
        <div>
          <Field name="preparation_time" component="input" type="number"
                 min="0" max="999" step="1" />
        </div>
        <div>
          <Field name="cook_time" component="input" type="number"
                 min="0" max="999" step="1" />
        </div>
        <div>
          <Field name="tag_list" component="input" type="text" placeholder="#parties #kids" />
        </div>
        <div>
          <Field name="instructions" component="input" type="textarea"
                 placeholder="Chop vegies in large chunks" />
        </div>
        <div>
          <Button color="primary" type="submit">Share</Button>
        </div>
      </form>
    </div>
  )
}

CreateRecipe = reduxForm({
  form: 'createRecipe'
})(CreateRecipe);

export default CreateRecipe;
