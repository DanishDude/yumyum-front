import React from 'react'
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import './EditProfile.scss';

const validate = values => {
  const errors = {};
  if (values.newPassword !== values.confirmPassword)
    errors.password = 'New passwords must match';
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="field">
    <input {...input} placeholder={label} type={type} />
    {touched && (error & <span>{error}</span>)}
  </div>
)

let EditProfile = (props) => {
  const { handleSubmit, user } = props
  console.log(props);
  

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
            <p>{}</p>
          </div>
          <div>
            <Button className="save" color="primary" type="submit">Save</Button>
          </div>
        </form>
      </div>
  );
};

export default EditProfile = reduxForm({
  form: 'editProfile',
  validate
})(EditProfile);
