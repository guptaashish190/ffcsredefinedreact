import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import shortID from 'shortid';

class NewUser extends React.Component {
  constructor(props) {
    super(props);

    const token = window.localStorage.getItem('newUserToken');
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    axios.get('http://localhost:3005/auth/verifyToken', config)
      .then((res) => {
        this.setState({
          userInfo: res.data.user.user,
        });
      })
      .catch(() => this.props.history.push('/login'));
  }

  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    errors: [],
  }
  componentWillMount() {
    const token = window.localStorage.getItem('newUserToken');
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    axios.get('http://localhost:3005/auth/verifyToken', config)
      .catch(() => this.props.history.push('/login'));
  }

  onChangeHandler = (e, type) => {
    if (type === 'username') {
      if (e.target.value.length > 7) {
        axios.post('http://localhost:3005/profile/new/validateUsername', { username: e.target.value }).then((response) => {
          if (!response.data.valid) {
            this.setState({
              errors: [...this.state.errors, 'Username taken'],
            });
          } else {
            this.setState({
              errors: this.state.errors.filter(elem => elem !== 'Username taken'),
            });
          }
        });
      } else {
        this.setState({
          errors: this.state.errors.filter(elem => elem !== 'Username taken'),
        });
      }
    }
    this.setState({
      [type]: e.target.value,
    }, () => {
      const { errors } = this.state;
      if (this.state.passwordConfirmation !== this.state.password && errors.indexOf('Password do not match') === -1) {
        this.setState({
          errors: [...errors, 'Password do not match'],
        });
      } else if (this.state.passwordConfirmation === this.state.password) {
        this.setState({
          errors: errors.filter(elem => elem !== 'Password do not match'),
        });
      }
    });
  }

  onSubmit = () => {
    if (this.state.errors.length === 0) {
      const userInfo = {
        ...this.state.userInfo,
        username: this.state.username,
        password: this.state.password,
      };
      console.log('saving user');
      axios.post('http://localhost:3005/profile/new/addUser', { userInfo }).then((res) => {
        if (res.data.status === 'ok') {
          window.localStorage.setItem('token', res.data.token);
          window.localStorage.removeItem('newUserToken');
          this.props.history.push('/profile');
        }
      });
    }
  }
  getErrorElements = () => this.state.errors.map(elem => <li key={shortID.generate()}>{elem}</li>)


  render() {
    return (
      <div className="newUserDialog-container">
        <div className="newUserDialog" >
          <ul>
            {this.getErrorElements()}
          </ul>
          <input placeholder="Choose a username" value={this.state.username} type="text" onChange={e => this.onChangeHandler(e, 'username')} />
          <input placeholder="Choose a password" value={this.state.password} type="password" onChange={e => this.onChangeHandler(e, 'password')} />
          <input placeholder="Confirm password" value={this.state.passwordConfirmation} type="password" onChange={e => this.onChangeHandler(e, 'passwordConfirmation')} />
          <button type="button" onClick={() => this.onSubmit()}>Done</button>
        </div>
      </div>
    );
  }
}

export default withRouter(NewUser);
