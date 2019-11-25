import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, signup } from '../../actions/user';
import Login from './Login';
import Signup from './Signup';

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
      login(user);
      window.localStorage.setItem('token', user['token']);
      //history.pushState(this.state.form.pathname);
    })
    .catch(err => {
      alert(err);
      console.log(err);
    });
  };

  signup = values => {
    const { signup } = this.props
      fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      })
      .then(res => {
        if (res.status === 500) {
          console.log(`Error ${res.body}`);
          alert('Error during signup')
        } else if (res.status === 201) {
          return res.json()
        }
      })
      .then(user => {
        signup(user);
        window.localStorage.setItem('token', user['token']);
      })
  }

  toggleLogin = () => {
    const userToken = window.localStorage.getItem('token')
    console.log(userToken);
  }

  render() { 
    return (
    <div>
      <Login onSubmit={this.login} />
      <Signup onSubmit={this.signup} />
      <button type="button" onClick={this.toggleLogin}>Log token</button>
    </div>
  )}
}

const mdtp = dispatch => bindActionCreators({login, signup}, dispatch);
 
export default connect(null, mdtp)(LoginPage);
