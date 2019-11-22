import React from 'react';
import SignIn from './SignIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userRegister } from '../../actions/user';

class SignInPage extends React.Component {
  submit = values => {
  const { userRegister, history, location: {state} } = this.props
    fetch('http://localhost:5000/api/signin', {
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
      userRegister(user);
      //history.pushState(this.state.form.pathname);
    })
    .catch(err => {
      alert(err);
      console.log(err);
    });
  };

  render() { 
    return <SignIn onSubmit={this.submit} />
  }
}

const mdtp = dispatch => bindActionCreators({userRegister}, dispatch);
 
export default connect(null, mdtp)(SignInPage);