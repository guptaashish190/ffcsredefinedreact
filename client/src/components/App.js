import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import '../styles/style.scss';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3005/api/getSlots?courses=CSE2003&preferredTime=%22evening%22&courses=MAT1014').then((data) => {
      console.log(data);
    });
  }
  render() {
    return (
      <div>
        <h1>Welcome React Express</h1>
        <button onClick={() => this.props.changeTest('Dispatch Working')}>{this.props.test}</button><br />
        <button onClick={() => this.props.fetchExpressRes()}>{this.props.expressFetch}</button>
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
