import React from 'react';
import classNames from 'classnames';

class Tablecell extends React.Component {
  createSlot = () => (
    <div>
      <div>{this.props.added.CODE}</div>
      <div>{this.props.added.VENUE}</div>
      <div>{this.props.added.SLOT}</div>
    </div>
  )

  render() {
    return (
      this.props.added ? <td rowSpan="1" className="addedSlot">{this.createSlot()}</td> : <td className="unSlotted" rowSpan="1"> {this.props.slot}</td>
    );
  }
}

export default Tablecell;
