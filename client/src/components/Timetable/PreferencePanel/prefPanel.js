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
        <div className="heading">Select Courses</div>
        <AddCourses />
        <AddedCoursesList />

        <div className="heading sec">Theory class timings</div>

        <form className="timePreferenceOptions">

          <label className="container">Morning Theories
            <input type="radio" id="morning" name="preferredTime" defaultChecked value="morning" />
            <span className="checkmark" />
          </label>
          <label className="container">Evening Theories
            <input type="radio" id="evening" name="preferredTime" value="evening" />
            <span className="checkmark" />
          </label>

        </form>
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
