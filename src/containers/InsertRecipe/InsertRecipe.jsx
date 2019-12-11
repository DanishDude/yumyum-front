import React from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

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
    <div className="CreateRecipe">
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
          <label htmlFor="image">Add a cover photo</label>
          <Field name="image" component={FileInput} type="file" accept="image/png, image/jpeg"
          />
        </div>
        <div>
          <Button color="primary" type="submit">Share</Button>
        </div>
      </form>
    </div>
  );
};

InsertRecipe = reduxForm({
  form: 'insertRecipe'
})(InsertRecipe);

export default InsertRecipe;
