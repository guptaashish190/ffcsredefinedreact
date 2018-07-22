import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../../actions/modifySlotsActions';

class TimetablePrefs extends React.Component {
  render() {
    return (
      <div className="timetable-prefs">
        <form>

          <label className="container">Modify using selected courses
            <input onClick={() => this.props.setType('course_specific')} type="radio" id="course-specific" name="modify" defaultChecked />
            <span className="checkmark" />
          </label>
          <label className="container">Modify using all courses
            <input onClick={() => this.props.setType('all_no_specific')} type="radio" id="all" name="modify" />
            <span className="checkmark" />
          </label>

        </form>
      </div>
    );
  }
}
// Map State and Dispatch to props
const mapStateToProps = () => ({

});
const mapDispatchToProps = dispatch => ({
  setType: type => dispatch(Actions.setType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimetablePrefs);
