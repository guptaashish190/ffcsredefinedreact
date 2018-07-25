import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../../actions/modifySlotsActions';

class Tablecell extends React.Component {
  onSlotClick = () => {
    this.props.setSelectSlotCourse(this.props.added.CODE);
    this.props.setVisible(true);
  }
  createSlot = () => (
    <div className="container">
      <div className="display">
        <div>{this.props.added.CODE}</div>
        <div>{this.props.added.VENUE}</div>
        <div>{this.props.added.SLOT}</div>
      </div>
      <div className="tt-slot-extra-info">
        <div className="extra-info-title">{this.props.added.TITLE}</div>
        <div className="extra-info-main">
          <div className="extra-info-slot">Slot: {this.props.added.SLOT}</div>
          <div className="extra-info-faculty">Faculty: {this.props.added.FACULTY}</div>
          <div className="extra-info-venue">Venue: {this.props.added.VENUE}</div>
        </div>
      </div>
    </div>
  )

  render() {
    return (
      this.props.added ? <td rowSpan="1" onClick={() => this.onSlotClick()} className="addedSlot">{this.createSlot()}</td> : <td className="unSlotted" rowSpan="1"> {this.props.slot}</td>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectSlotCourse: course => dispatch(Actions.setSelectSlotCourse(course)),
    setVisible: visible => dispatch(Actions.setVisible(visible)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tablecell);
