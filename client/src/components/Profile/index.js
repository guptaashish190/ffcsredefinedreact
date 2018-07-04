import React from 'react';
import axios from 'axios';

class Profile extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      axios.get('http://localhost:3005/auth/verifyToken', config).then((res) => {
        console.log('welcome');
      }).catch((err) => {
        this.props.history.push('/login');
      });
    }
  }
  render() {
    return (
      <div>Yeah</div>
    );
  }
}
function mapStateToProps(state) {

}
export default Profile;
