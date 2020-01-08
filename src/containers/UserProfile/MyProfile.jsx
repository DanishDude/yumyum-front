import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const MyProfile = (user) => {
  const history = useHistory();
  const goToMyRecipes = () => history.push('/my-recipes');
  
  return (
    <div className="BasicProfile">
      <div className="header">
        <h2>My Account</h2>
        <p>Your Information. Stay current and keep it up to date</p>
      </div>
      <div>
        <h6>Display Name</h6><p> {user.user.displayname} </p>
        <h6>First Name</h6><p> {user.user.firstname} </p>
        <h6>Last Name</h6><p> {user.user.name} </p>
        <h6>Email</h6><p> {user.user.email} </p>
      </div>
      <Button onClick={goToMyRecipes}>My Recipes</Button>
    </div>
  );
};

const mstp = state => {
  return {
    token: state.user.token,
    user: state.user.user
  };
};

export default connect(mstp, null)(MyProfile);
