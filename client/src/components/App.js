import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import '../styles/style.scss';
import Header from './Header/header';
import Body from './Body/body';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
// Map State and Dispatch to props
const mapStateToProps = state => ({
  test: state.reducer1.test,
  expressFetch: state.reducer1.fetchedData,
});
const mapDispatchToProps = dispatch => ({
  changeTest: (val) => {
    dispatch(actions.changeTest(val));
  },
  fetchExpressRes: () => {
    dispatch(actions.fetchExpressRes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
