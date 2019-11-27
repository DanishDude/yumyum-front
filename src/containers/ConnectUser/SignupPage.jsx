import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, signup } from '../../actions/user';
import Signup from './Signup';
import './SignupPage.scss';

class SignupPage extends React.Component {
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
          alert('Error during signup')
          console.log(res);
          
        } else if (res.status === 201) {
          return res.json()
        }
      })
      .then(user => {
        signup(user);
        window.localStorage.setItem('token', user['token']);
        this.props.history.push('/recipes');
      })
      .catch(err => {
      alert(err);
      console.log(err);
    });
  }

  goTologin = () => {
    this.props.history.push('/login');
  }

  render() { 
    return (
    <div className="SignupPage">
      <Signup onSubmit={this.signup} goTologin={this.goTologin} />
    </div>
  )}
}

const mdtp = dispatch => bindActionCreators({login, signup}, dispatch);
 
export default connect(null, mdtp)(SignupPage);
