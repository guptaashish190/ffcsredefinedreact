import React from 'react';
import classnames from 'classnames';

class Tablecell extends React.Component {
  state = {
    tooltip: false,
  }
  onTooltip = () => {
    this.setState({
      tooltip: !this.state.tooltip,
    });
  }
  createSlot = () => (
    <div onClick={() => this.onTooltip()} className="container">
      <div className="display">
        <div>{this.props.added.CODE}</div>
        <div>{this.props.added.VENUE}</div>
        <div>{this.props.added.SLOT}</div>
      </div>
      <div className={classnames({ 'tt-slot-extra-info': true, tooltip: this.state.tooltip })}>
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
      this.props.added ? <td rowSpan="1" className="addedSlot">{this.createSlot()}</td> : <td className="unSlotted" rowSpan="1"> {this.props.slot}</td>
    );
  }
}

export default Tablecell;
