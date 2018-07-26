import React from 'react';
import shortID from 'shortid';
import classnames from 'classnames';
import _ from 'lodash/core';

class CollapsableList extends React.Component {
  state = {
    visible: false,
    boxVisible: false,
  }

  onSelect = (key) => {
    this.props.select(key);
  }

  mapList = () => {
    // if this component's instance is the final box
    if (this.props.size === 'medium') {
      return this.props.list.map((elem) => {
        const key = shortID.generate();
        return (
          <li onClick={() => this.onSelect({ ...elem, faculty: this.props.titleElement })} key={key}>
            <div className="box">
              <div>Slot: {elem.slot}</div>
              <div>Venue: {elem.venue}</div>
            </div>
          </li>
        );
      });
    }
    return this.props.list.map(elem => <li key={shortID.generate()}>{elem}</li>);
  }

  reverseVisible = (type) => {
    this.setState({
      [type]: !this.state[type],
    });
  }

  render() {
    return (
      <div className={classnames({ 'collapsable-list': true, [this.props.size]: true })}>
        <div className="title" onClick={() => this.reverseVisible(this.props.size === 'large' ? 'visible' : 'boxVisible')}>
          <div>{this.props.titleElement}</div>
          <span>V</span>
        </div>
        <ul className={classnames({
            'main-list': true,
             visible: this.state.visible && this.props.size === 'large',
             'box-visible': this.state.boxVisible,
        })}
        >
          {this.mapList()}
        </ul>
      </div>
    );
  }
}

export default CollapsableList;
