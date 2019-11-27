import React from 'react';
import { Field, reduxForm} from 'redux-form';
import './Signup.scss';

let Signup = props => {
  const { handleSubmit, goTologin } = props
  return (
    <div className="Signup">
      <h3>This is a Signup Page</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <Field name="firstname" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <Field name="lastname" component="input" type="text" />
        </div>
         <div>
          <label htmlFor="email">Email:</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Create Profile</button>
        <button type="button" onClick={goTologin}>Login instead</button>
      </form>
    </div>
  )
}

Signup = reduxForm({
  form: 'signup'
})(Signup);

export default Signup;
