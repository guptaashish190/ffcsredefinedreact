import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

class ProfileRedirect extends React.Component {
  componentWillMount() {
    const { token } = queryString.parse(location.search);
    if (!token) {
      this.props.history.push('/login');
    }
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    axios.get('http://localhost:3005/auth/verifyToken', config).then((response) => {
      if (response.data.user.newUser) {
        window.localStorage.setItem('newUserToken', token);
        this.props.history.push('/profile/new');
      } else {
        window.localStorage.setItem('token', token);
        this.props.history.push('/profile');
      }
    }).catch(() => this.props.history.push('/login'));
  }
  render() {
    return (
      <div />
    );
  }
}

export default withRouter(ProfileRedirect);
