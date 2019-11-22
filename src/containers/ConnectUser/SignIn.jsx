import React from 'react';
import { Field, reduxForm } from 'redux-form';
/* import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSignIn } from '../../actions/user'; */

let SignIn = props => {
  const { handleSubmit } = props
  return (
    <div className="SignIn">
      <h3>This is the sign-in page</h3>
      <p>to be continued...</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Connect</button>
      </form>
    </div>

  )
}

SignIn = reduxForm({
  form: 'signIn'
})(SignIn);

export default SignIn;