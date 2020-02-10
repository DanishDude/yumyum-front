import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/user';
import './Logout.scss';

const Logout = (props) => {
  const dispatch = useDispatch();
  const { toggle } = props;
  const logout = () => {
    dispatch(logoutUser())
    toggle();
  };

  return (
    <span className="Logout">
      <i className="fas fa-sign-out-alt" onClick={() => logout()}></i>
    </span>
  );
};

export default Logout;
