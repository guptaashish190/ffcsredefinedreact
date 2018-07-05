import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import Header from './Header/header';
import Body from './Body/body';
import LoginComponent from './Login/index';
import Profile from './Profile/index';
import ProfileRedirect from './Profile/profileRedirect';
import userLoginActions from '../actions/userLoginActions';
import '../styles/style.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header user={this.props.user} logoutUser={this.props.logoutUser} />
          <Route exact path="/login" component={() => <LoginComponent user={this.props.user} setUser={this.props.setUser} />} />
          <Route path="/profile" component={() => <Profile user={this.props.user} setUser={this.props.setUser} />} />
          <Route exact path="/redirect" component={() => <ProfileRedirect user={this.props.user} setUser={this.props.setUser} />} />
          <Route path="/about" component={LoginComponent} />
          <Route exact path="/" component={Body} />
        </div>
      </Router>
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
    setUser: user => dispatch(userLoginActions.setUser(user)),
    logoutUser: () => dispatch(userLoginActions.logoutUser()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
