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
          <div>
            <h6></h6>
            <Button className="save" color="primary" type="submit">Save</Button>
          </div>
        </form>
      </div>
  );
};

EditProfile = reduxForm({
  form: 'userProfile'
})(EditProfile);

export default EditProfile;
