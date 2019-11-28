import React from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm} from 'redux-form';
import './Signup.scss';

let Signup = props => {
  const { handleSubmit, goTologin } = props
  return (
    <div className="Signup">
      <div className="content">
        <h3 className="item">Create your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <Field name="firstname" component="input" type="text" placeholder="First name" />
          </div>
          <div className="item">
            <Field name="lastname" component="input" type="text" placeholder="Last name" />
          </div>
          <div className="item">
            <Field name="email" component="input" type="email" placeholder="Email" />
          </div>
          <div className="item">
            <Field name="password" component="input" type="password" placeholder="Password" />
          </div>
          <div className="item">
            <Button color="link" type="button" onClick={goTologin}>Login instead</Button>
            <Button color="primary" type="submit">Create Profile</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

Signup = reduxForm({
  form: 'signup'
})(Signup);

export default Signup;
