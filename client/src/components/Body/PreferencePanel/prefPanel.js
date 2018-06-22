import React from 'react';
import { connect } from 'react-redux';
import AddCourses from './addCourses';
import AddedCoursesList from './addedCoursesList';
import actions from '../../../actions/addCourseActions';

class PrefPanel extends React.Component {
  onClickCreate = () => {
    const timePref = document.querySelector('input[name="preferredTime"]:checked').value;
    this.props.submitCourses(this.props.coursesList, timePref);
  }

  render() {
    return (
      <div className="preferencePanel" >
        <div className="heading">Select Preferences</div>
        <AddCourses />
        <form className="timePreferenceOptions">
          <div>
            <input type="radio" id="morning" name="preferredTime" defaultChecked value="Morning" />
            <label htmlFor="morning">Morning Theories</label>
          </div>
          <div>
            <input type="radio" id="evening" name="preferredTime" value="Evening" />
            <label htmlFor="evening">Evening Theories</label>
          </div>
        </form>
        <AddedCoursesList />
        <button onClick={() => this.onClickCreate()} className="createButton" type="button">Create Timetable</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coursesList: state.courseListReducer.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitCourses: (courses, timePref) => dispatch(actions.submitCourses(courses, timePref)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PrefPanel);
