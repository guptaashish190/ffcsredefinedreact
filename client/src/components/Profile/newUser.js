import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

class NewUser extends React.Component {
  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    error: {
      passMatch: false,
      usernameUnavailable: false,
    },
  }
  componentWillMount() {
    const token = window.localStorage.getItem('newUserToken');
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    axios.get('http://localhost:3005/auth/verifyToken', config).catch(() => this.props.history.push('/login'));
  }

  onChangeHandler = (e, type) => {
    if (type === 'username') {
      this.setState({
        username: e.target.value,
      });
    } else if (type === 'password') {
      this.setState({
        password: e.target.value,
      }, () => {
        if (this.state.passwordConfirmation !== this.state.password) {
          this.setState({
            error: {
              passMatch: true,
            },
          });
        } else {
          this.setState({
            error: {
              passMatch: false,
            },
          });
        }
      });
    } else {
      this.setState({
        passwordConfirmation: e.target.value,
      }, () => {
        if (this.state.passwordConfirmation !== this.state.password) {
          this.setState({
            error: {
              passMatch: true,
            },
          });
        } else {
          this.setState({
            error: {
              passMatch: false,
            },
          });
        }
      });
    }
  }
  getErrorElements = () => (
    <ul>
      {this.state.error.usernameUnavailable ? <li>Username not available</li> : <div style={{ display: 'none' }} />}
      {this.state.error.passMatch ? <li>Passwords do not match</li> : <div style={{ display: 'none' }} />}
    </ul>
  )

  render() {
    return (
      <div className="newUserDialog-container">
        <div className="newUserDialog" >
          {this.getErrorElements()}
          <input placeholder="Choose a username" value={this.state.username} type="text" onChange={e => this.onChangeHandler(e, 'username')} />
          <input placeholder="Choose a password" value={this.state.password} type="password" onChange={e => this.onChangeHandler(e, 'password')} />
          <input placeholder="Confirm password" value={this.state.passwordConfirmation} type="password" onChange={e => this.onChangeHandler(e, 'passwordConfirmation')} />
          <button type="button">Done</button>
        </div>
      </div>
    );
  }
}

export default withRouter(NewUser);
