import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import axios from 'axios';
import CollapsableList from './collapsableList';
import Actions from '../../../actions/modifySlotsActions';
import Actions2 from '../../../actions/timetableActions';
import clashingAlgo from './clashingAlgo';

class TimetablePrefs extends React.Component {
  state = {
    selectedTheory: null,
    selectedLab: null,
    labComponentList: [],
    theoryComponentList: [],
  }

  onModifyClick = () => {
    const toAddElements = [];

    const clashingSlots = [];

    if (this.state.selectedTheory) {
      const slots = this.state.selectedTheory.slot.split('+');

      slots.forEach((slot) => {
        // Clashing Algo Returns true for a clash
        if (clashingAlgo(slot, this.props.occupiedSlots)) {
          clashingSlots.push(slot);
        }
        toAddElements.push({
          slot,
          element: {
            SLOT: slot,
            CODE: this.props.selectedCourse,
            VENUE: this.state.selectedTheory.venue,
            FACULTY: this.state.selectedTheory.faculty,
            TITLE: this.state.selectedTheory.title,
          },
        });
      });
    }
    if (this.state.selectedLab) {
      const slots = this.state.selectedLab.slot.split('+');
      slots.forEach((slot) => {
        if (clashingAlgo(slot, this.props.occupiedSlots)) {
          clashingSlots.push(slot);
        }
        toAddElements.push({
          slot,
          element: {
            SLOT: slot,
            CODE: this.props.selectedCourse,
            VENUE: this.state.selectedLab.venue,
            FACULTY: this.state.selectedLab.faculty,
            TITLE: this.state.selectedLab.title,
          },
        });
      });
    }
    if (clashingSlots.length === 0) {
      toAddElements.forEach((obj) => {
        this.props.setSlot(obj);
      });
    } else {
      console.log('clashing', clashingSlots);
    }
  }

  onSetType = (type) => {
    this.props.setType(type);
    if (type === 'Slot') {
      axios.get('http://localhost:3005/api/getModifySlots', { params: { course: this.props.selectedCourse, type: 'Slot' } }).then((response) => {
        this.props.setResponseData(response.data);

        if (this.props.setResponseData) {
          this.setFacultyList('th');
          this.setFacultyList('la');
        }
      });
    }
  }

  setFacultyList = (type) => {
    const theory = this.props.responseData.Theory;
    const lab = this.props.responseData.Lab;

    let list = [];
    if (type === 'th' && theory) {
      list = Object.keys(theory).map(elem => (<CollapsableList
        size="medium"
        titleElement={elem}
        list={theory[elem].map(elem2 => ({ slot: elem2.SLOT, venue: elem2.VENUE }))}
        select={selected => this.setSelected(selected, 'th')}
      />));

      this.setState({
        theoryComponentList: list,
      });
    } else if (lab) {
      let facultyObjectKeys = Object.keys(lab);
      if (this.state.selectedTheory) {
        facultyObjectKeys = facultyObjectKeys.filter(faculty => faculty === this.state.selectedTheory.faculty);
      }
      list = facultyObjectKeys.map(elem => (<CollapsableList
        size="medium"
        titleElement={elem}
        list={lab[elem].map(elem2 => ({ slot: elem2.SLOT, venue: elem2.VENUE, title: elem2.TITLE }))}
        select={selected => this.setSelected(selected, 'la')}
      />));

      this.setState({
        labComponentList: list,
      });
    }
  }

  setSelected = (selected, type) => {
    if (type === 'th') {
      this.setFacultyList('th');
      this.setState({ selectedTheory: selected }, () => {
        this.setFacultyList('la');
      });
    } else {
      this.setFacultyList('th');
      this.setState({ selectedLab: selected });
    }
  }


  getSelectedPanel = (type) => {
    if (this.props.responseData[type]) {
      return (
        <div className="modify-preview-empty">
          <div />
        </div>
      );
    }
    return '';
  }


  getPanel = () => {
    switch (this.props.panelType) {
      case 'Slot':
        return (
          <div className="main-panel-slot" >
            {this.props.responseData.Theory ? <CollapsableList size="large" titleElement="Theory" list={this.state.theoryComponentList} /> : []}
            {this.props.responseData.Lab ? <CollapsableList size="large" titleElement="Lab" list={this.state.labComponentList} /> : []}
            <div style={{ marginTop: '30px', textAlign: 'center', display: 'block' }}>Selected</div>
            <div className="preview">
              {this.state.selectedTheory ? (
                <div onClick={() => this.resetComponentList('th')} className="modify-preview">
                  <div>Faculty: {this.state.selectedTheory.faculty}</div>
                  <div>Slot: {this.state.selectedTheory.slot}</div>
                  <div>Venue: {this.state.selectedTheory.venue}</div>
                </div>
            ) : this.getSelectedPanel('Theory')}

              {this.state.selectedLab ? (

                <div onClick={() => this.resetComponentList('la')} className="modify-preview">
                  <div>Faculty: {this.state.selectedLab.faculty}</div>
                  <div>Slot: {this.state.selectedLab.slot}</div>
                  <div>Venue: {this.state.selectedLab.venue}</div>
                </div>
            ) : this.getSelectedPanel('Lab')}

            </div>
            <button className="modify-button" onClick={() => this.onModifyClick()} >Modify</button>
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

  resetComponentList = (type) => {
    if (type === 'th') {
      this.setState({ selectedTheory: null }, () => {
        this.setFacultyList('la');
      });
    } else {
      this.setState({ selectedLab: null }, () => {
        this.setFacultyList('th');
      });
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
  occupiedSlots: state.timetableReducer.occupiedSlots,
});
const mapDispatchToProps = dispatch => ({
  setVisible: visible => dispatch(Actions.setVisible(visible)),
  setType: type => dispatch(Actions.setType(type)),
  setResponseData: data => dispatch(Actions.setResponseData(data)),
  setLabList: obj => dispatch(Actions.setLabList(obj)),
  setSlot: obj => dispatch(Actions2.setSlot(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimetablePrefs);
