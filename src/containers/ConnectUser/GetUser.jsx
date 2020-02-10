import React, { Fragment, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchUser } from '../../actions/user';

const GetUser = (token) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(asyncFetchUser(token.token)) }, []);
  return (<Fragment></Fragment>);
};

const mdtp = dispatch => bindActionCreators({ asyncFetchUser }, dispatch);

export default connect(null, mdtp)(GetUser);
