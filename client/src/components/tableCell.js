import React from 'react';
import classNames from 'classnames';

class Tablecell extends React.Component {
  render() {
    return (
      <td rowSpan="1">{this.props.added ? 'added' : this.props.slot}</td>
    );
  }
}

export default Tablecell;
