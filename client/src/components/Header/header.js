import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import userLoginActions from '../../actions/userLoginActions';

class Header extends React.Component {
  getLoginLogoutButton = () => {
    if (Object.keys(this.props.user).length === 0) {
      return <Link to="/login" >LOGIN</Link>;
    }
    return <Link to="/login" onClick={() => this.props.logoutUser()}>LOGOUT</Link>;
  }
  getUsernameText = () => {
    if (Object.keys(this.props.user).length === 0) {
      return <div style={{ display: 'none' }} />;
    }
    return <div className="userHeader" ><span className="usernameText">{this.props.user.displayName}</span><img src={this.props.user.photoURL} alt="PP" /></div>;
  }
  render() {
    return (
      <div className="header">
        <div className="menu-items">
          <Link to="/" >HOME</Link>
          {this.getLoginLogoutButton()}
          <Link to="/about" >ABOUT</Link>
        </div>
        {this.getUsernameText()}
        <div className="redefined-text">
          <div>FFCS</div>&nbsp;<div>REDEFINED</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userLoginReducer.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(userLoginActions.logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
