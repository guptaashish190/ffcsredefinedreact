import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

class Login extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.props.history.push('/profile');
    }
    return true;
  }
  render() {
    return (
      <div className="login-container">
        <form action="http://localhost:3005/login/validate" method="POST">
          <input name="regno" type="text" placeholder="Registration Number" />
          <input name="pass" type="password" placeholder="Password" />
          <input type="submit" value="LOGIN" />
          <a className="loginBtn loginBtn--google" href="http://localhost:3005/auth/google" >Login Using Google</a>
          <a className="loginBtn loginBtn--facebook" href="http://localhost:3005/auth/facebook" >Login Using Facebook</a>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
