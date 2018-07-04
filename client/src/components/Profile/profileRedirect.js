import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

class ProfileRedirect extends React.Component {
  componentDidMount() {
    const { token } = queryString.parse(location.search);
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    axios.get('http://localhost:3005/auth/verifyToken', config).then((response) => {
      console.log(response.data.user);
      window.localStorage.setItem('token', token);
      this.props.history.push('/profile');
    }).catch(err => this.props.history.push('/login'));
  }
  render() {
    return (
      <div />
    );
  }
}

export default ProfileRedirect;
