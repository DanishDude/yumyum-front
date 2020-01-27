import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { asyncUpdateUser } from '../../actions/user';
import EditProfile from './EditProfile';
import PageHeader from '../../components/PageHeader';
import ProfileInfo from './ProfileInfo';
import './MyProfile.scss';

const MyProfile = (props) => {
  const { user, token } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const goToMyRecipes = () => history.push('/my-recipes');
  
  let editMode = false;
  const editProfile = () => editMode = true;
  console.log(editMode);
  

  const updateUser = (token, values) => dispatch(asyncUpdateUser(token, values));

  const header = {
    title: 'My Account',
    subtext: 'Your Information. Stay current and keep it up to date'
  };
  
  return (
    <div className="MyProfile">
      <div className="header-wrapper">
        <PageHeader {...header} />
        <div className="action-btns">
          <Button onClick={goToMyRecipes}>My Recipes</Button>
        </div>
      </div>
        <ProfileInfo />
        <Button onClick={() => editProfile}>Edit profile</Button>
        <p>{editMode.toString()}</p>

        <EditProfile
          onSubmit={values => updateUser(token, values)}
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

export default connect(mstp, null)(MyProfile);
