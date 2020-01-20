import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { reduxForm } from 'redux-form';
import PageHeader from '../../components/PageHeader';
import EditProfile from './EditProfile';
import { asyncUpdateUser } from '../../actions/user';
import './MyProfile.scss';

let MyProfile = (state) => {
  const { user, token } = state;
  const dispatch = useDispatch();
  const history = useHistory();

  const goToMyRecipes = () => history.push('/my-recipes');

  const updateUser = (token, values) => {
    dispatch(asyncUpdateUser(token, values));
  };

  const header = {
    title: 'My Account',
    subtext: 'Your Information. Stay current and keep it up to date'
  };

  console.log(state);
  
  return (
    <div className="MyProfile">
      <div className="header-wrapper">
        <PageHeader {...header} />
      <div className="action-btns">
        <Button onClick={goToMyRecipes}>My Recipes</Button>
      </div>
        <EditProfile
          onSubmit={values => updateUser(token, values)}
          initialValues={user}
          user={user}
        />
      </div>
      
    </div>
  );
};

const mstp = state => {
  return {
    user: state.user.user,
    token: state.user.token
  };
};

MyProfile = reduxForm({
  form: 'userProfile'
})(MyProfile);

export default connect(mstp, null)(MyProfile);
