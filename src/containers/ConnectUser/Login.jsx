import React from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import './Login.scss';

const validate = values => {
  const errors = {};
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    errors.email = 'Required';
  } else if (!regex.test(String(values.email).toLowerCase())) {
    errors.email = 'Invalid email';
  };

  if (!values.password) {
    errors.password = 'Required';
  };

  return errors;
}

const renderField = ({ input, placeholder, type, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    <div className="error-line">
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  </div>
)

let Login = props => {
  const { handleSubmit, loginError, signup, valid } = props;
  const disabled = !valid ? true : false;

  return (
    <div className="Login">
      <div className="content">
        <h3 className="item">Sign In</h3>
        {loginError === 'Invalid'
          && <span className="login-error">Invalid email or password</span>}
        {!loginError && <span className="no-login-error"> </span>}
        <form onSubmit={handleSubmit}>
          <div className="item">
            <Field name="email" component={renderField} type="email"  placeholder="Email" />
          </div>
          <div className="item">
            <Field name="password" component={renderField} type="password" placeholder="password" />
          </div>
          <div className="item">
            <Button color="link" type="button" onClick={signup}>Create account</Button>
            <Button className="sbmt" color="primary" type="submit" disabled={disabled}>Login</Button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login = reduxForm({
  form: 'login',
  validate
})(Login);
