import React from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <span style={{ color: 'white' }}>Welcome</span>
      </div>

    );
  }
}

export default withRouter(Profile);
