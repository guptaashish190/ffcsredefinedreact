import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  componentWillMount() {
    if (window.localStorage.getItem('token')) {
      console.log(window.localStorage.getItem('token'));
      this.props.history.push('/profile');
    }
  }
  render() {
    return (
      <div className="login-container">
        <form action="http://localhost:3005/login/validate" method="POST">
          <input name="regno" type="text" placeholder="Registration Number" />
          <input name="pass" type="password" placeholder="Password" />
          <input type="submit" value="LOGIN" />
        </form>
        <a href="http://localhost:3005/auth/google">Google Login</a>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    getUser: state.userLoginReducer.user,
  };
}
export default connect(mapStateToProps)(Login);
