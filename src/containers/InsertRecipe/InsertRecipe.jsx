import React, { useState, Fragment } from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import CancelAddRecipe from './CancelAddRecipe';
import './InsertRecipe.scss';

let InsertRecipe = (props) => {
  const { handleSubmit } = props;

  const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

  const FileInput = ({
    input: { value: omitValue, onChange, onBlur, ...inputProps }, 
    meta: omitMeta, 
    ...props 
  }) => {
    return (
      <input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...props.input}
        {...props}
      />
    );
  };

  const [index, setIndex] = useState(0);
  const next = () => setIndex(index < recipeForm.length - 1 ? index + 1 : index);
  const previous = () => setIndex(index > 0 ? index - 1 : index);

  let ingredients = ["toto", "popo"];
  let ingredientsList = (<p>{ingredients.join(', ')}</p>);
  
  const addIngredient = value => {
    ingredients.push(value);
    console.log(ingredients.join(', '));
    window.document.getElementById("newIngredient").value = "";
    return ingredientsList;
  };
  
// TO BE CONT.
  const [step, setStep] = useState(0);
  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step <= 0 ? 0 : step - 1);

  const instructions = [];
  const addInstructionStep = value => {
    instructions.push(value)
    nextStep();
    
  };

  const recipeForm = [
    <Fragment>
      <h2>Your cool title</h2>
      <Field name="title" component="input" type="text" placeholder="Ceasar Salad" />
    </Fragment>,

    <Fragment>
      <h2>Share your story</h2>
      <Field name="description" component="textarea" type="text" rows="4" wrap="hard"
          placeholder="Where does this recipe come from? Why is it special?
          Who would love it?"
      />
    </Fragment>,

    <Fragment>
      <h2>Ingredients</h2>
      <Field name="ingredients" component="input" type="text" placeholder="lettuce" value={ingredients.join(',')} />
      <input type="text" id="newIngredient" />
      {ingredientsList} {{/* does not update ?? */}}
      <i className="fas fa-plus-circle step-btn"
        onClick={() => addIngredient(window.document.getElementById("newIngredient").value)} >
      </i>
    </Fragment>,

    <Fragment>
      <h2>Tag it</h2>
      <Field name="tag_list" component="input" type="text" placeholder="#parties #kids" />
    </Fragment>,

// TO BE CONT.
    <Fragment>
      <h2>Instructions (Step {step})</h2>
      <Field name="instructions" component="textarea" type="text" rows="4" wrap="soft" />
      <i className="fas fa-plus-circle step-btn" onClick={addInstructionStep}></i>

    </Fragment>,

    <Fragment>
      <h2>Prep time & Cook time</h2>
      <div className="timers">
        <div className="timer">
          <Field name="prep_time" component="input" type="number"
                min="0" max="999" step="1" />
        </div>
        <div className="timer">
          <Field name="cook_time" component="input" type="number"
                min="0" max="999" step="1" />
        </div>
      </div>
    </Fragment>,

    <Fragment>
      <h2>Add a cover photo</h2>
      <Field name="image" component={FileInput} type="file" accept="image/png, image/jpeg"
      />
    </Fragment>
  ];

  return (
    <div className="InsertRecipe">
      <div className="content">
        <h3>Add your recipe</h3>
        <form onSubmit={handleSubmit}>
          <Field name="id" component="input" type="hidden" />
          <div className="field">
            {recipeForm[index]}
          </div>
         
          
          <div className="action-btns">
            <div className="cancel"><CancelAddRecipe /></div>
            {index > 0 ?
              (<Button className="previous" color="secondary" type="button" onClick={previous}>
                  Previous
                </Button>) : ''}
            {index < recipeForm.length - 1 ?
              (<Button className="next" color="primary" type="button" onClick={next}>
                Next
              </Button>) : ''}
            {index === recipeForm.length - 1 ? 
              (<Button className="submit-btn" color="success" type="submit">
                Share
              </Button>) : ''}
          </div>
        </form>
      </div>
    </div>
  );
};

InsertRecipe = reduxForm({
  form: 'insertRecipe'
})(InsertRecipe);

export default InsertRecipe;
