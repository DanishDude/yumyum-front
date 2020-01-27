import React from 'react';
import { connect } from 'react-redux';

const ProfileInfo = (props) => {
  const { user } = props
  console.log(user);
  
  return (
    <div className="ProfileInfo">
      <h6>Email:</h6>
      <p>{user.email}</p>
      <h6>Display name:</h6>
      <p>{user.displayname}</p>
      <h6>First name:</h6>
      <p>{user.firstname}</p>
      <h6>Last name:</h6>
      <p>{user.lastname}</p>
    </div>
  );
};

const mstp = state => {
  return ({ user: state.user.user })
}

export default connect(mstp, null)(ProfileInfo);
