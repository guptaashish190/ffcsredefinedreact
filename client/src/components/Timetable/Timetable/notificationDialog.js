import React from 'react';
import { connect } from 'react-redux';

class NotificationDialog extends React.Component {
  render() {
    return (
      <div />
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.timetableReducer.errors,
  };
}

export default connect(mapStateToProps)(NotificationDialog);
