import React from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm} from 'redux-form';
import './Signup.scss';

const validate = values => {
  const errors = {};
  console.log('hello');

  if (!values.displayname) {
    errors.displayname = 'Required';
  } else if (values.displayname.length > 15) {
    errors.displayname = 'Must be 15 characters or less';
  };

  if (!values.password) {
    errors.password = 'Required';
  };
}

const renderfield = ({ input, placeholder, type, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    {touched && (error && <span className="error">{error}</span>)}
  </div>
);

let Signup = props => {
  const { handleSubmit, goTologin, valid } = props;
  const disabled = !valid ? true : false;
  console.log('DISABLED: ' + disabled);
  console.log('PROPS: ' + JSON.stringify(props));
  
  

  return (
    <div className="Signup">
      <div className="content">
        <h3 className="item">Create your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <Field name="displayname" component={renderfield} type="text" placeholder="Display name" />
          </div>
          <div className="item">
            <Field name="firstname" component={renderfield} type="text" placeholder="First name (optional)" />
          </div>
          <div className="item">
            <Field name="lastname" component={renderfield} type="text" placeholder="Last name (optional)" />
          </div>
          <div className="item">
            <Field name="email" component={renderfield} type="email" placeholder="Email" />
          </div>
          <div className="item">
            <Field name="password" component={renderfield} type="password" placeholder="Password" />
          </div>
          <div className="item">
            <Button color="link" type="button" onClick={goTologin}>Login instead</Button>
            <Button color="primary" type="submit" disabled={disabled}>Create Profile</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

Signup = reduxForm({
  form: 'signup',
  validate
})(Signup);

export default Signup;
