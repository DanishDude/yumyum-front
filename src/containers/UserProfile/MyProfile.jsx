import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { reset } from 'redux-form'
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

  const updateUser = (token, values) => dispatch(asyncUpdateUser(token, values));
  const afterSubmit = (result, dispatch) => dispatch(reset('editProfile'));

  const header = {
    title: 'My Account',
    subtext: 'Your Information. Stay current and keep it up to date'
  };

  let view = false
  const changeView = () => {
    view = !view;
    console.log(view);
    
  }

  let plop = view ? 'It\'s Good' : 'No Way';
  
  return (
    <div className="MyProfile">
      <div className="header-wrapper">
        <PageHeader {...header} />
        <div className="action-btns">
          <Button onClick={goToMyRecipes}>My Recipes</Button>
        </div>
      </div>
      <Button onClick={changeView} >Do Something</Button>
      <p>{plop}</p>
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

export default connect(mstp, null)(MyProfile);
