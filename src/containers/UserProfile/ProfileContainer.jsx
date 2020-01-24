import React from 'react';
import MyRecipes from './MyRecipes';
import SyncValidationForm from './SyncValidationForm';


const ProfileContainer = () => {
  return (
    <div className="ProfileContainer">
      <MyRecipes />
      <SyncValidationForm />

    </div>
  );
};

export default ProfileContainer;
