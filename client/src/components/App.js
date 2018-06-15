import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import '../styles/style.scss';

const App = () => (
  <div>
    <h1>Welcome React Express</h1>
    <button onClick={() => this.props.changeTest('Dispatch Working')}>{this.props.test}</button>
    {!this.props.expressFetch ? <button onClick={() => this.props.fetchExpressRes()}>Check Express Fetch</button> : <h4>{this.props.expressFetch}</h4>}
  </div>
);
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
