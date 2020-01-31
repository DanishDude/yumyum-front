import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { asyncFetchSignup } from '../../actions/user';
import Signup from './Signup';
import './SignupPage.scss';

const SignupPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goTologin = () => history.push('/login');
  const signupUser = values => dispatch(asyncFetchSignup(values));
  const afterSubmit = () => history.push('/recipes');

  return (
    <div className="SignupPage">
      <Signup
        goTologin={goTologin}
        onSubmit={signupUser}
        onSubmitSuccess={afterSubmit}
      />
    </div>
  )
}

export default SignupPage;
