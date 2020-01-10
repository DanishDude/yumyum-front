import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import PageHeader from '../../components/PageHeader';

const MyProfile = (user) => {
  const history = useHistory();
  const goToMyRecipes = () => history.push('/user-profile');

  const header = {
    title: 'My Account',
    subtext: 'Your Information. Stay current and keep it up to date'
  };
  
  return (
    <div className="BasicProfile">

      <PageHeader {...header} />
      <Button onClick={goToMyRecipes}>My Recipes</Button>
      <div>
        <h6>Display Name</h6><p> {user.user.displayname} </p>
        <h6>First Name</h6><p> {user.user.firstname} </p>
        <h6>Last Name</h6><p> {user.user.name} </p>
        <h6>Email</h6><p> {user.user.email} </p>
      </div>
    </div>
  );
};

const mstp = state => {
  return {
    user: state.user.user
  };
};

export default connect(mstp, null)(MyProfile);
