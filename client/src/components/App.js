import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header/header';
import Home from './Home';
import LoginComponent from './Login/index';
import Profile from './Profile/index';
import ProfileRedirect from './Profile/profileRedirect';
import NewUser from './Profile/newUser';
import protectRouteHOC from './HOCs/protectRouteHOC';

import '../styles/style.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/profile" component={protectRouteHOC(Profile)} />
          <Route exact path="/redirect" component={ProfileRedirect} />
          <Route exact path="/profile/new" component={NewUser} />
          <Route path="/about" component={LoginComponent} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
