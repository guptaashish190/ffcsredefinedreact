import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/features';
import '../styles/index.scss';
import Header from './Header/header';
import Body from './Body/body';

class App extends React.Component {
  render() {
    return (
      <div className={this.props.theme}>
        <Header changeTheme={this.props.changeTheme} />
        <Body />
      </div>
    );
  }
}
// Map State and Dispatch to props
const mapStateToProps = state => ({
  theme: state.features.theme,
});
const mapDispatchToProps = dispatch => ({
  changeTheme: (theme) => {
    dispatch(actions.changeTheme(theme));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
