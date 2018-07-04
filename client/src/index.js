import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/header';
import Body from './components/Body/body';
import LoginComponent from './components/Login/index';
import Profile from './components/Profile/index';
import ProfileRedirect from './components/Profile/profileRedirect';
import './styles/style.scss';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/login" component={LoginComponent} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/redirect" component={ProfileRedirect} />
        <Route path="/about" component={LoginComponent} />
        <Route exact path="/" component={Body} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'),
);
