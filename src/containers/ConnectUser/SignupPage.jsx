import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { asyncFetchSignup } from '../../actions/user';
import Signup from './Signup';
import './SignupPage.scss';

const SignupPage = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = () => {
    user.error = '';
    history.push('/login');
  }
  const signupUser = values => dispatch(asyncFetchSignup(values));

  return (
    <div className="SignupPage">
      <Signup
        login={login}
        onSubmit={values =>  signupUser(values)}
        signupError={user.error}
      />
    </div>
  )
}

export default SignupPage;
