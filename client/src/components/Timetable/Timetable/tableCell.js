import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../../actions/modifySlotsActions';

class Tablecell extends React.Component {
  onSlotClick = () => {
    this.props.setSelectSlot(this.props.slot);
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
      this.props.added ? <td rowSpan="1" className="addedSlot">{this.createSlot()}</td> : <td className="unSlotted" onClick={() => this.onSlotClick()} rowSpan="1"> {this.props.slot}</td>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectSlot: slot => dispatch(Actions.setSelectSlot(slot)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tablecell);
