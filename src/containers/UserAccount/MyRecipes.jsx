import React from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from 'reactstrap';

const MyRecipes = () => {
  const history = useHistory();
  const goToMyProfile = () => history.push('my-profile');

  return (
    <div className="MyRecipes">
      <h2>My recipes page</h2>
      <Button onClick={goToMyProfile}>My Profile</Button>
    </div>
  );
};

export default MyRecipes;
