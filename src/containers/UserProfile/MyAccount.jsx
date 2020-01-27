import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { reset } from 'redux-form'
import { asyncUpdateUser } from '../../actions/user';
import EditProfile from './EditProfile';
import PageHeader from '../../components/PageHeader';
import ProfileInfo from './EditMyProfile';
import './MyAccount.scss';

const MyProfile = (props) => {
  const { user, token } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const goToMyRecipes = () => history.push('/my-recipes');
  const editProfile = () => history.push('/edit-profile');

  const updateUser = (token, values) => dispatch(asyncUpdateUser(token, values));
  const afterSubmit = (result, dispatch) => dispatch(reset('editProfile'));

  const header = {
    title: 'My Account',
    subtext: 'Your Information. Stay current and keep it up to date'
  };
  
  return (
    <div className="MyAccount">
      <div className="header-wrapper">
        <PageHeader {...header} />
        <div className="action-btns">
          <Button onClick={goToMyRecipes}>My Recipes</Button>
        </div>
      </div>
      <div className="Profile">
          <div className="field">
            <h6>Email:</h6>
            <p>{user.email}</p>
          </div>
          <div className="field">
            <h6>Display Name:</h6>
            <p>{user.displayname}</p>
          </div>
          <div className="field">
            <h6>First Name:</h6>
            <p>{user.firstname}</p>
          </div>
          <div className="field">
            <h6>Last Name:</h6>
            <p>{user.lastname}</p>
          </div>
          <div>
            <Button className="edit" color="primary" type="button" onClick={editProfile}>Edit</Button>
          </div>
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

export default connect(mstp, null)(MyProfile);
