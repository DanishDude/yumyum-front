import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PageHeader from '../../components/PageHeader';
import './MyProfile.scss';

const MyProfile = (user) => {
  const history = useHistory();
  const goToMyRecipes = () => history.push('/my-recipes');

  const header = {
    title: 'My Account',
    subtext: 'Your Information. Stay current and keep it up to date'
  };

  const handleSubmit = values => console.log(values);

  const initialValues = user;
  
  return (
    <div className="MyProfile">
      <div className="header-wrapper">
        <PageHeader {...header} />
      <div className="action-btns">
        <Button onClick={goToMyRecipes}>My Recipes</Button>
      </div>
      </div>
      <div className="basic-info">
        <form onSubmit={handleSubmit}>
          <div>
            <h6>Email:</h6>
            <Field name="email" component="input" type="email" placeholder=""/>
          </div>
          <div>
            <h6>Display Name:</h6>
            <Field name="displayname" component="input" type="text" placeholder=""/>
          </div>
          <div>
            <h6>First Name:</h6>
            <Field name="firstname" component="input" type="text" placeholder=""/>
          </div>
          <div>
            <h6>Last Name:</h6>
            <Field name="lastname" component="input" type="text" placeholder=""/>
          </div>
        </form>
      </div>
    </div>
  );
};

const mstp = state => {
  return {
    user: state.user.user
  };
};

MyProfile = reduxForm({
  form: 'userProfile'
})(MyProfile);

export default connect(mstp, null)(MyProfile);
