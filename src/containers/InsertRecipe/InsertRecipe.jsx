import React, { useState } from 'react';
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
  console.log(index);
  

  const recipeForm = [
    <div className="field">
      <Field name="title" component="input" type="text" 
        placeholder="Give your recipe a cool title"
      />
    </div>,

    <div className="field">
      <Field name="description" component="textarea" type="text" rows="4" wrap="hard"
            placeholder="Share your storey... Where does this recipe come from? Why is it special?
            Who else would love it?"
      />
    </div>,

    <div className="field">
      <Field name="ingredients" component="input" type="text"
        placeholder="minced, beef, carrots, onions, herbs de provence"
      />
    </div>,

    <div className="field">
      <Field name="tag_list" component="input" type="text" placeholder="#parties #kids" />
    </div>,

    <div className="field">
      <Field name="instructions" component="textarea" type="text" rows="4" wrap="soft"
            placeholder="NB separate steps with | sign, e.g. Slice tomatoes | Throw in olives |
            Sprinkle salt, pepper | Add a dash of olive oil | Top with freshly chopped basil"
      />
    </div>,

    <div className="row">
      <div className="field timer col-3">
        <label htmlFor="prep_time">Prep time</label>
        <Field name="prep_time" component="input" type="number"
              min="0" max="999" step="1" />
      </div>
      <div className="field timer col-3">
        <label htmlFor="cook_time">Cook time</label>
        <Field name="cook_time" component="input" type="number"
              min="0" max="999" step="1" />
      </div>
    </div>,

    <div className="row">
      <div className="field col-6">
        <label htmlFor="image">Add a cover photo</label>
        <Field name="image" component={FileInput} type="file" accept="image/png, image/jpeg"
      />
      </div>
    </div>
  ];

  return (
    <div className="InsertRecipe">
      <div className="content">
        <h3>Add your recipe</h3>
        <form onSubmit={handleSubmit}>
          <Field name="id" component="input" type="hidden" />
          {recipeForm[index]}
         
          
          <div className="cancel"><CancelAddRecipe /></div>
          <div className="row">
            {index > 0 ?
              (<div className="col-6">
                <Button className="previous" color="secondary" type="button" onClick={previous}>
                  Previous
                </Button>
              </div>) : ''}
            {index < recipeForm.length - 1 ?
              (<div className="col-6">
                <Button className="next" color="primary" type="button" onClick={next}>Next</Button>
              </div>) : ''}
            {index === recipeForm.length - 1 ? 
              (<div className="field col-6">
                <Button className="submit-btn" color="primary" type="submit">Share</Button>
              </div>) : ''}
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
