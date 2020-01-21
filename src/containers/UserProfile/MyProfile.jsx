import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { asyncUpdateUser } from '../../actions/user';
import EditProfile from './EditProfile';
import PageHeader from '../../components/PageHeader';
import './MyProfile.scss';

let MyProfile = (props) => {
  console.log(props);
  
  const { user, token } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const goToMyRecipes = () => history.push('/my-recipes');

  const updateUser = (token, values) => {
    console.log(JSON.parse(JSON.stringify(values)));
    
    let data = {};
    Object.entries(values).forEach(value => data[value[0]] = value[1]);
    console.log(data);
    
    dispatch(asyncUpdateUser(token, values));
  };

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
        <EditProfile
          onSubmit={values => updateUser(token, values)}
          initialValues={user}
          user={user}
        />
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
