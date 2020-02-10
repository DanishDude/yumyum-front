import React from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm} from 'redux-form';
import './Signup.scss';

const validate = values => {
  const errors = {};
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    errors.email = 'Required';
  } else if (!regex.test(String(values.email).toLowerCase())) {
    errors.email = 'Invalid email';
  };

  if (!values.displayname) {
    errors.displayname = 'Required';
  } else if (values.displayname.length > 15) {
    errors.displayname = 'Must be 15 characters or less';
  };

  if (!values.password) {
    errors.password = 'Required';
  };

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match'
  }

  return errors;
}

const renderfield = ({ input, placeholder, type, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    <div className="error-line">
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  </div>
);

let Signup = props => {
  const { handleSubmit, login, signupError, valid } = props;
  const disabled = !valid ? true : false;

  return (
    <div className="Signup">
      <div className="content">
        <h3>Create your account</h3>
        {signupError === 'dup_email'
          && <span className="signup-error">Email already registered</span>}
        {signupError === 'dup_displayname'
          && <span className="signup-error">Display name already taken</span>}
        {!signupError && <span className="no-signup-error"> </span>}
        <form onSubmit={handleSubmit}>
          <div className="item">
            <Field name="email" component={renderfield} type="email" placeholder="Email" />
          </div>
          <div className="item">
            <Field name="displayname" component={renderfield} type="text" placeholder="Display name" />
          </div>
          <div className="item">
            <Field name="password" component={renderfield} type="password" placeholder="Password" />
          </div>
          <div className="item">
            <Field name="confirmPassword" component={renderfield} type="password" placeholder="Confirm password" />
          </div>
          <div className="item">
            <Button color="link" type="button" onClick={login}>Login instead</Button>
            <Button color="primary" type="submit" disabled={disabled}>Create Profile</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup = reduxForm({
  form: 'signup',
  validate
})(Signup);
