import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, token, user, ...propsRoute }) => (
  <Route
    {...propsRoute}
    render={props => (
      (token && token !=='')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}
  />
);

const mstp = state => {
  return {
    token: state.user.token,
    user: state.user.user
  };
};

export default connect(mstp)(PrivateRoute);
