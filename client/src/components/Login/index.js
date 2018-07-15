import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  componentWillMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.props.history.push('/profile');
    }
    return true;
  }
  onChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  }

  onSubmitLocal = () => {
    axios.post('http://localhost:3005/auth/local', { username: this.state.username, password: this.state.password }).then((res) => {
      console.log(res.data);
    });
  }
  render() {
    return (
      <div className="login-container">
        <div>
          <input name="regno" onChange={e => this.onChange(e, 'username')} type="text" placeholder="Registration Number" />
          <input name="pass" onChange={e => this.onChange(e, 'password')} type="password" placeholder="Password" />
          <input onClick={() => this.onSubmitLocal()} type="button" value="LOGIN" />
        </div>
        <a className="loginBtn loginBtn--google" href="http://localhost:3005/auth/google" >Login Using Google</a>
        <a className="loginBtn loginBtn--facebook" href="http://localhost:3005/auth/facebook" >Login Using Facebook</a>
      </div>
    );
  }
}
export default withRouter(Login);
