import React, { Fragment, useEffect, useState,  } from 'react';
import { Button } from 'reactstrap';
import { change, Field, reduxForm } from 'redux-form';
import CancelAddRecipe from './CancelAddRecipe';
import './InsertRecipe.scss';

let InsertRecipe = props => {
  const { handleSubmit, initialValues, dispatch } = props;

  /*------------------------------ States ------------------------------*/
  const [index, setIndex] = useState(0);
  const [ingredientsBtn, setIngredientsBtn] = useState('add-ingredients-btn-inactive');
  const [ingredients, setIngredients] = useState(initialValues && initialValues.ingredients
    ? initialValues.ingredients
    : []);
  const [step, setStep] = useState(0);
  const [instructions, setInstructions] = useState(initialValues && initialValues.instructions
    ? initialValues.instructions
    : []);
  const [addInstructionsBtn, setAddInstructionsBtn] = useState('add-instructions-btn-inactive');
  const [removeInstructionsBtn, setRemoveInstructionsBtn] = useState(step === instructions.length
    ? 'remove-instructions-btn-inactive' : 'remove-instructions-btn');
  const [file, setFile] = useState([]);
  const [disabled, setDisabled] = useState(initialValues ? false : true);

  /*------------------------------ Select form index ------------------------------*/
  const next = () => {
    if (recipeForm[index].title === 'instructions'
      && step === instructions.length
      && window.document.getElementById("newInstruction").value.length > 0) {
      addInstruction(window.document.getElementById("newInstruction").value);
    };

    setIndex(index < recipeForm.length - 1 ? index + 1 : index);
  };

  const previous = () => setIndex(index > 0 ? index - 1 : index);
  
  /*------------------------------ Title ------------------------------*/
  const handleTitleChange = e => e.target.value ? setDisabled(false) : setDisabled(true);

  /*------------------------------ Ingredients ------------------------------*/
  const handleIngredientsChange = value => {
    if (value === ',') {
      window.document.getElementById("newIngredient").value = '';
    } else if (value[value.length - 1] === ',') {
      addIngredient(value.slice(0, value.length - 1));
    } else if (ingredients.includes(value)) {
      setIngredientsBtn('add-ingredients-btn-inactive')
    } else if (value.length > 0) {
      setIngredientsBtn('add-ingredients-btn');
    } else {
      setIngredientsBtn('add-ingredients-btn-inactive')
    };
  };
  
  const addIngredient = value => {
    if (value === '') return;
    if (!ingredients.includes(value)) setIngredients([...ingredients, value]);
    
    window.document.getElementById("newIngredient").value = '';
    setIngredientsBtn('add-ingredients-btn-inactive');
  };
  
  const removeIngredient = index => setIngredients(ingredients.filter((e, i) => i !== index));
  
  useEffect(() => {
    dispatch(change("insertRecipe", "ingredients", ingredients))
  }, [ingredients]);
  
  /*------------------------------ Instructions ------------------------------*/
  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step <= 0 ? 0 : step - 1);
  
  const handleInstructionsChange = (value) => {
    if (value === '|') {
      window.document.getElementById("newInstruction").value = '';
    } else if (value[value.length - 1] === '|') {
      addInstruction(value.slice(0, value.length - 1));
    } else if (value.length === 0) {
      setAddInstructionsBtn('add-instructions-btn-inactive');
    } else {
      setAddInstructionsBtn('add-instructions-btn');
    };
  };
  
  const addInstruction = value => {
    if (value === '') return;
    setInstructions([...instructions, value]);
    setAddInstructionsBtn('add-instructions-btn-inactive');
    window.document.getElementById("newInstruction").value = '';
    nextStep();
  };
  
  const removeInstruction = index => {
    if (index === 0) {
      if (instructions.length === 1) setRemoveInstructionsBtn('remove-instructions-btn-inactive');
      window.document.getElementById("newInstruction").value = instructions.length === 1 ?
        '' : instructions[1];
      setInstructions(instructions.slice(1));
    } else if (index === instructions.length - 1) {
      window.document.getElementById("newInstruction").value = instructions[index - 1];
      setStep(index - 1);
      setInstructions(instructions.filter((e, i) => i !== index));
    } else {
      window.document.getElementById("newInstruction").value = instructions[index + 1];
      setInstructions(instructions.filter((e, i) => i !== index));
    };
  };
  
  const goToInstruction = index => {
    const instructionValue = window.document.getElementById("newInstruction").value;
    
    if (instructionValue.length > 0 && step === instructions.length) {
      setInstructions([...instructions, instructionValue]);
    } else if (step < instructions.length) {
      instructions[step] = instructionValue;
    };
    
    setStep(index);
    setRemoveInstructionsBtn('remove-instructions-btn');
    setAddInstructionsBtn('add-instructions-btn');
    window.document.getElementById("newInstruction").value = instructions[index];
  };
  
  const startNewInstruction = () => {
    instructions[step] = window.document.getElementById("newInstruction").value;
    setStep(instructions.length);
    setRemoveInstructionsBtn('remove-instructions-btn-inactive');
    setAddInstructionsBtn('add-instructions-btn');
    window.document.getElementById("newInstruction").value = '';
  };

  useEffect(() => {
    dispatch(change("insertRecipe", "instructions", instructions))
  }, [instructions]);
  
  /*------------------------------ Image file ------------------------------*/
  const adaptFileEventToValue = delegate => e => {
    const file = e.target.files[0];
    delegate(file);
    
    // setFile(Object.assign(file, { preview: URL.createObjectURL(file) }));
  };
  
  const FileInput = ({
    input: { value: omitValue, onChange, onBlur, ...inputProps }, 
    meta: omitMeta, 
    ...props 
  }) => {
    return (
      <input
        id="file-input"
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...props.input}
        {...props}
      />
    );
  };

  let thumbnailSrc, thumbnailStyle;
  
  if (file.preview) {
    thumbnailSrc = file.preview
  } else if (initialValues && initialValues.image) {
    thumbnailSrc = `http://localhost:5000/api/recipe/${initialValues.id}/image`;
  } else {
    thumbnailSrc = '';
    thumbnailStyle = { display: 'none' };
  }
      
  const thumbnail = (<img className="thumbnail" src={thumbnailSrc} style={thumbnailStyle}/>);
  
  /*------------------------------ Recipe form ------------------------------*/
  const recipeForm = [{
    title: 'title',
    field: <Fragment>
      <h2>Your cool title</h2>
      <Field 
        name="title"
        component="input"
        type="text"
        placeholder="Ceasar Salad"
        onChange={e => handleTitleChange(e)}
      />
    </Fragment>
  },{
    title: 'description',
    field: <Fragment>
      <h2>Share your story</h2>
      <Field name="description" component="textarea" type="text" rows="4" wrap="hard"
          placeholder="Where does this recipe come from? Why is it special?"
      />
    </Fragment>
  },{
    title: 'ingredients',
    field: <Fragment>
      <h2>Ingredients</h2>
      <Field name="ingredients" component="input" type="hidden" value={ingredients}/>
      <input id="newIngredient" type="text" placeholder={ingredients[0] ? "" : "lettuce"}
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
    </Fragment>
  },{
    title: 'instructions',
    field: <Fragment>
      <h2>Instructions (Step {step + 1})</h2>
      <Field
        id="instructions-field"
        name="instructions"
        component="textarea"
        type="hidden"
        value={instructions}
      />
      <textarea
        id="newInstruction"
        defaultValue={instructions[step]}
        placeholder={instructions[0] ? "" : "Chop lettuce and place in a salad bowl"}
        onChange={() => {
          handleInstructionsChange(window.document.getElementById("newInstruction").value)
        }}
      >
      </textarea>
      <i className={`fas fa-plus-circle ${addInstructionsBtn}`}
        onClick={() => addInstruction(window.document.getElementById("newInstruction").value)}>
      </i>
      <i className={`fas fa-minus-circle ${removeInstructionsBtn}`} 
        onClick={() => removeInstruction(step)}>
      </i>
      <p className="step-indexes">{instructions.map((e, i) => 
        <span className="step-index" key={i} onClick={() => goToInstruction(i)}>
          {`${i !== 0 ? '  ' : ''} ${i + 1}`}
        </span>)}
        {step >= instructions.length
          ? ''
          : <span className="step-index step-new" onClick={startNewInstruction}>Add</span>}
      </p>
    </Fragment>
  },{
    title: 'time',
    field: <Fragment>
      <h2 className="prep-cook-time">
        <span className="title">Prep time</span>
        <span className="title">Cook time</span>
      </h2>
      <div className="prep-cook-time">
        <div className="timer">
          <Field name="prep_time" component="input" type="number"min="0" max="999" step="1" />
        </div>
        <div className="timer">
          <Field name="cook_time" component="input" type="number" min="0" max="999" step="1" />
        </div>
      </div>
    </Fragment>
  },{
    title: 'image',
    field: <Fragment>
      <h2>Add a cover photo</h2>
      <Field
        name="image"
        component={FileInput}
        type="file"
        accept="image/png, image/jpeg"
      />
      {thumbnail}
    </Fragment>
  }];

  return (
    <div className="InsertRecipe">
      <div className="content">
        <h3>Add your recipe</h3>
        <form onSubmit={handleSubmit}>
          <Field name="id" component="input" type="hidden" />
          <div className="field">{recipeForm[index].field}</div>
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
              (<Button className="submit-btn" color="success" type="submit" disabled={disabled}>
                {initialValues ? 'Update' : 'Share'}
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
