import React from 'react';
import { Field, reduxForm } from 'redux-form';
/* import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSignIn } from '../../actions/user'; */

let Login = props => {
  const { handleSubmit } = props
  return (
    <div className="Login">
      <h3>This is the login page</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>

  )
}

Login = reduxForm({
  form: 'login'
})(Login);

export default Login;