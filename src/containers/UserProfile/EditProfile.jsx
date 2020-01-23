import React from 'react'
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import './EditProfile.scss';

let EditProfile = (props) => {
  const { handleSubmit, user } = props

  return (
    <div className="EditProfile">
          <div className="field">
            <h6>Email:</h6>
            <p>{user.email}</p>
          </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <h6>Display Name:</h6>
            <Field name="displayname" component="input" type="text" placeholder=""/>
          </div>
          <div className="field">
            <h6>First Name:</h6>
            <Field name="firstname" component="input" type="text" placeholder=""/>
          </div>
          <div className="field">
            <h6>Last Name:</h6>
            <Field name="lastname" component="input" type="text" placeholder=""/>
          </div>
          <div className="field">
            <h6>Old Password:</h6>
            <Field name="password" component="input" type="password" placeholder=""/>
          </div>
          <div className="field">
            <h6>New Password:</h6>
            <Field name="newPassword" component="input" type="password" placeholder=""/>
          </div>
          <div className="field">
            <h6>Confirm Password:</h6>
            <Field name="confirmPassword" component="input" type="password" placeholder=""/>
          </div>
          <div>
            <Button className="save" color="primary" type="submit">Save</Button>
          </div>
        </form>
      </div>
  );
};

EditProfile = reduxForm({
  form: 'editProfile'
})(EditProfile);

export default EditProfile;
