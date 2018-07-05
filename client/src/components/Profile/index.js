import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      const config = {
        headers: { authorization: `Bearer ${token}` },
      };
      axios.get('http://localhost:3005/auth/verifyToken', config).then((response) => {
        if (Object.keys(this.props.user).length === 0) {
          this.props.setUser(response.data.user);
        }
      });
    } else {
      this.props.history.push('/login');
    }
  }
  render() {
    return (
      <div>
        <span style={{ color: 'white' }}>Welcome</span>
      </div>

    );
  }
}

export default withRouter(Profile);
