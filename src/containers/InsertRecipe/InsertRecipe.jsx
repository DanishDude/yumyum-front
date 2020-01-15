import React from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import CancelAddRecipe from './CancelAddRecipe';
import './InsertRecipe.scss';

let InsertRecipe = props => {
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

  return (
    <div className="InsertRecipe">
      <div className="content">
        <h3>Add your recipe</h3>
        <form onSubmit={handleSubmit}>
          <Field name="id" component="input" type="hidden" />
          <div className="field">
            <Field name="title" component="input" type="text" placeholder="Recipe title" />
          </div>
          <div className="field">
            <Field name="description" component="textarea" type="text" rows="4" wrap="hard"
                  placeholder="Share your storey... Where does this recipe come from? Why is it special?
                  Who else would love it?"
            />
          </div>
          <div className="field">
            <Field name="ingredient_list" component="input" type="text"
              placeholder="minced, beef, carrots, onions, herbs de provence"
            />
          </div>
          <div className="field">
            <Field name="tag_list" component="input" type="text" placeholder="#parties #kids" />
          </div>
          <div className="field">
            <Field name="instructions" component="textarea" type="text" rows="4" wrap="soft"
                  placeholder="NB separate steps with | sign, e.g. Slice tomatoes | Throw in olives |
                  Sprinkle salt, pepper | Add a dash of olive oil | Top with freshly chopped basil"
            />
          </div>
          <div className="row">
            <div className="field timer col-3">
              <label htmlFor="preparation_time">Prep time</label>
              <Field name="preparation_time" component="input" type="number"
                    min="0" max="999" step="1" />
            </div>
            <div className="field timer col-3">
              <label htmlFor="cook_time">Cook time</label>
              <Field name="cook_time" component="input" type="number"
                    min="0" max="999" step="1" />
            </div>
            <div className="field col-6">
              <label htmlFor="image">Add a cover photo</label>
              <Field name="image" component={FileInput} type="file" accept="image/png, image/jpeg"
            />
            </div>
          </div>
          <div className="row">
            <div className="col-4"><CancelAddRecipe /></div>
            <div className="field col-8">
              <Button className="submit-btn" color="primary" type="submit">Share</Button>
            </div>
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
