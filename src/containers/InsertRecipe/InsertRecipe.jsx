import React, { Fragment, useState,  } from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import CancelAddRecipe from './CancelAddRecipe';
import './InsertRecipe.scss';

let InsertRecipe = props => {
  const { handleSubmit, initialValues } = props;

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

  const next = () => setIndex(index < recipeForm.length - 1 ? index + 1 : index);
  const previous = () => setIndex(index > 0 ? index - 1 : index);

  const [index, setIndex] = useState(0);
  const [ingredientsBtn, setIngredientsBtn] = useState('step-btn-ingredients-inactive');
  const [ingredients, setIngredients] = useState(initialValues && initialValues.ingredients
    ? initialValues.ingredients.split(', ')
    : []);

  const handleIngredientsChange = value => {
    if (value.length === 1 && value === ',') {
      window.document.getElementById("newIngredient").value = '';
    } else if (value[value.length - 1] === ',') {
      addIngredient(value.slice(0, value.length - 1));
    } else if (ingredients.includes(value)) {
      setIngredientsBtn('step-btn-ingredients-inactive')
    } else if (value.length > 0) {
      setIngredientsBtn('step-btn-ingredients');
    } else {
      setIngredientsBtn('step-btn-ingredients-inactive')
    };
  };

  const addIngredient = value => {
    if (value === '') return;
    if (!ingredients.includes(value)) setIngredients([...ingredients, value]);

    window.document.getElementById("newIngredient").value = '';
    setIngredientsBtn('step-btn-ingredients-inactive');
  };

  const removeIngredient = index => setIngredients(ingredients.filter((e, i) => i !== index));
  
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
      <Field name="ingredients" component="input" type="hidden" value={ingredients} />
      <input id="newIngredient" type="text" placeholder={!ingredients[0] ? "lettuce" : ""}
        onChange={() => {
          handleIngredientsChange(window.document.getElementById("newIngredient").value);
        }}
      />
      <p>{
        ingredients.map((ingredient, i) => 
          <span key={i} onClick={() => removeIngredient(i)}>
            {`${i !== 0 ? ', ' : ''} ${ingredient}`}
          </span>
        )}
      </p>
      <i className={`fas fa-plus-circle ${ingredientsBtn}`}
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
