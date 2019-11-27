import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';
import './Login.scss';

let Login = props => {
  const { handleSubmit, createAccount } = props

  

  return (
    <div className="Login">
      <div className="content">
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="email" component="input" type="email"  placeholder="Email" />
        </div>
        <div>
          <Field name="password" component="input" type="password" placeholder="password" />
        </div>
        <div>
          <Button color="primary" type="submit">Login</Button>
        </div>
        <div>
          <Button color="link" type="button" onClick={createAccount}>Create account</Button>
        </div>
      </form>
      </div>
    </div>

  )
}

Login = reduxForm({
  form: 'login'
})(Login);

export default Login;