import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import '../styles/style.scss';

const App = props => (
  <div>
    <h1>Welcome React Express</h1>
    <button onClick={() => props.changeTest('Dispatch Working')}>{props.test}</button><br />
    <button onClick={() => props.fetchExpressRes()}>{props.expressFetch}</button>
  </div>
);

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
