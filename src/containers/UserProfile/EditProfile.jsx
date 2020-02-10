import React from 'react'
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import './EditProfile.scss';

const validate = values => {
  const errors = {};

  if (!values.displayname) {
    errors.displayname = 'Required';
  } else if (values.displayname.length > 15) {
    errors.displayname = 'Must be 15 characters or less';
  };

  if (!values.password) {
    errors.password = 'Required'
  };

  if (values.newPassword !== values.confirmPassword) {
    errors.confirmPassword = 'New passwords must match';
  };

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  </div>
);

let EditProfile = (props) => {
  const history = useHistory();
  const cancel = () => history.push('/my-profile');
  const { handleSubmit, user, valid } = props;
  const disabled = !valid ? true : false;
  
  return (
    <div className="EditProfile">
          <div className="field">
            <h6>Email:</h6>
            <p>{user.email}</p>
          </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <h6>Display Name:</h6>
            <Field name="displayname" component={renderField} type="text"/>
          </div>
          <div className="field">
            <h6>First Name:</h6>
            <Field name="firstname" component={renderField} type="text"/>
          </div>
          <div className="field">
            <h6>Last Name:</h6>
            <Field name="lastname" component={renderField} type="text"/>
          </div>
          <div className="field">
            <h6>Password:</h6>
            <Field name="password" component={renderField} type="password"/>
          </div>
          <div className="field">
            <h6>New Password:</h6>
            <Field name="newPassword" component={renderField} type="password"/>
          </div>
          <div className="field">
            <h6>Confirm Password:</h6>
            <Field name="confirmPassword" component={renderField} type="password"/>
          </div>
          <div className="action-btns">
            <h6></h6>
            <Button type="button" onClick={cancel}>Cancel</Button>
            <Button color="primary" type="submit" disabled={disabled}>Save</Button>
          </div>
        </form>
      </div>
  );
};

export default EditProfile = reduxForm({
  form: 'editProfile',
  validate
})(EditProfile);
