import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import PageHeader from '../../components/PageHeader';
import './MyProfile.scss';

const MyProfile = (props) => {
  const { user } = props;
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToMyRecipes = () => history.push('/my-recipes');
  const editProfile = () => history.push('/edit-profile');

  const header = {
    title: 'My Profile',
    subtext: 'Your Information. Stay current and keep it up to date',
    backgroundImage: 'a16f4ee0-7576-4bca-b97b-77dc46638087.jpg'
  };
  
  return (
    <div className="MyProfile">
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
          <div className="field">
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
