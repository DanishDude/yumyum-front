import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { asyncFetchPrecheck, asyncFetchSignup } from '../../actions/user';
import Signup from './Signup';
import './SignupPage.scss';

const SignupPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const login = () => {
    history.push('/login');
  }
  // const signupUser = values => dispatch(asyncFetchSignup(values));
  const signupUser = values => dispatch(asyncFetchPrecheck(values));
  const signupError = 'toto';

  return (
    <div className="SignupPage">
      <Signup
        login={login}
        onSubmit={values =>  signupUser(values)}
        signupError={signupError}
      />
    </div>
  )
}

export default SignupPage;
