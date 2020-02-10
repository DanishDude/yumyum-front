import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { asyncUpdateUser } from '../../actions/user';
import EditProfile from './EditProfile';
import PageHeader from '../../components/PageHeader';
import './EditMyProfile.scss';

const EditMyProfile = (props) => {
  const { user, token } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const goToMyRecipes = () => history.push('/my-recipes');
  const updateUser = (token, values) => dispatch(asyncUpdateUser(token, values));
  const afterSubmit = () => history.push('/my-profile');

  const header = {
    title: 'My Profile',
    subtext: 'Your Information. Stay current and keep it up to date'
  };
  
  return (
    <div className="EditMyProfile">
      <div className="header-wrapper">
        <PageHeader {...header} />
        <div className="action-btns">
          <Button onClick={goToMyRecipes}>My Recipes</Button>
        </div>
      </div>
      <EditProfile
        onSubmit={values => updateUser(token, values)}
        onSubmitSuccess={afterSubmit}
        initialValues={user}
        user={user}
      />
    </div>
  );
};

const mstp = state => {
  return {
    user: state.user.user,
    token: state.user.token
  };
};

export default connect(mstp, null)(EditMyProfile);
