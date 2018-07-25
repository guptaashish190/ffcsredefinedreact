import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import axios from 'axios';
import CollapsableList from './collapsableList';
import Actions from '../../../actions/modifySlotsActions';

class TimetablePrefs extends React.Component {
  state = {
    selectedTheory: null,
    selectedLab: null,
  }

  onSetType = (type) => {
    this.props.setType(type);
    if (type === 'Slot') {
      axios.get('http://localhost:3005/api/getModifySlots', { params: { course: this.props.selectedCourse, type: 'Slot' } }).then((response) => {
        this.props.setResponseData(response.data);
      });
    }
  }

  getFacultyList = (type) => {
    const theory = this.props.responseData.Theory;
    const lab = this.props.responseData.Lab;

    let list = [];
    if (type === 'th') {
      list = Object.keys(theory).map(elem => (<CollapsableList
        size="medium"
        titleElement={elem}
        list={theory[elem].map(elem2 => ({ slot: elem2.SLOT, venue: elem2.VENUE }))}
        select={(selected) => { this.setState({ selectedTheory: selected }); }}
      />));
    } else {
      list = Object.keys(lab).map(elem => (<CollapsableList
        size="medium"
        titleElement={elem}
        list={lab[elem].map(elem2 => ({ slot: elem2.SLOT, venue: elem2.VENUE }))}
        select={(selected) => { this.setState({ selectedLab: selected }); }}
      />));
    }
    return list;
  }

  getPanel = () => {
    switch (this.props.panelType) {
      case 'Slot':
        return (
          <div className="main-panel-slot" >
            {this.props.responseData.Theory ? <CollapsableList size="large" titleElement="Theory" list={this.getFacultyList('th')} /> : []}
            {this.props.responseData.Lab ? <CollapsableList size="large" titleElement="Lab" list={this.getFacultyList('la')} /> : []}

            <button className="modify-button">Modify</button>
          </div>
        );
      case 'Faculty':
        return (
          <div className="main-panel-faculty" >
            faculty
          </div>
        );
      default:
        return '';
    }
  }

  render() {
    return (
      <div className={classnames({ 'modify-panel': true, visible: this.props.visible })}>
        <span className="close-button" onClick={() => this.props.setVisible(false)}>X</span>
        <div className="title">
          Selected Slot: {this.props.selectedCourse}
        </div>
        <div className="modify-options">
          <button onClick={() => this.onSetType('Slot')} className="m-slot">Modify Slot</button>
          <button onClick={() => this.onSetType('Faculty')} className="m-faculty">Modify Faculty</button>
        </div>
        {this.props.responseData ? this.getPanel() : ''}
      </div>
    );
  }
}
// Map State and Dispatch to props
const mapStateToProps = state => ({
  selectedCourse: state.modifySlotsReducer.selectedCourse,
  visible: state.modifySlotsReducer.visible,
  courses: state.courseListReducer.courses,
  panelType: state.modifySlotsReducer.type,
  responseData: state.modifySlotsReducer.responseData,
});
const mapDispatchToProps = dispatch => ({
  setVisible: visible => dispatch(Actions.setVisible(visible)),
  setType: type => dispatch(Actions.setType(type)),
  setResponseData: data => dispatch(Actions.setResponseData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimetablePrefs);
