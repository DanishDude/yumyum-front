import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, signup } from '../../actions/user';
import Login from './Login';
import './LoginPage.scss';

class LoginPage extends React.Component {
  login = values => {
  const { login } = this.props
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    .then(res => {
      if (res.status === 401) {
        alert('Login error, check email and password is correct')
      } else if (res.status === 200) {
        return res.json()
      }
    })
    .then(user => {
      if (user && user['token'] !== '') {
        login(user);
        window.localStorage.setItem('token', user['token']);
        this.props.history.push('/recipes');
      }
      
    })
    .catch(err => {
      alert(err);
      console.log(err);
    });
  };

  createAccount = () => {
    this.props.history.push('/signup');
  }

  render() { 
    return (
    <div className="LoginPage">
      <Login onSubmit={this.login} createAccount={this.createAccount} />
    </div>
  )}
}

const mdtp = dispatch => bindActionCreators({login, signup}, dispatch);
 
export default connect(null, mdtp)(LoginPage);
