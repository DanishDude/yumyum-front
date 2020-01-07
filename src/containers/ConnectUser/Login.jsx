import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';
import './Login.scss';

let Login = props => {
  const { handleSubmit, createAccount } = props

  

  return (
    <div className="Login">
      <div className="content">
        <h3 className="item">Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <Field name="email" component="input" type="email"  placeholder="Email" />
          </div>
          <div className="item">
            <Field name="password" component="input" type="password" placeholder="password" />
          </div>
          <div className="item">
            <Button color="link" type="button" onClick={createAccount}>Create account</Button>
            <Button className="sbmt" color="primary" type="submit">Login</Button>
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