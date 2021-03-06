import React from 'react';
import { connect } from 'react-redux';
import shortID from 'shortid';
import actions from '../../../actions/addCourseActions';

class AddedCoursesList extends React.Component {
  mapCourses = () => {
    if (this.props.courses.length !== 0) {
      return (
        <ul>
          {this.props.courses.map(elem =>
            (
              <li key={shortID.generate()}>
                <span>{elem.CODE}</span>
                <span>{elem.TITLE}</span>
                <span>
                  <span>{elem.CREDITS}&nbsp;Credit(s)</span>
                  <input type="button" onClick={() => this.props.deleteElement({ CODE: elem.CODE, CREDITS: elem.CREDITS })} />
                </span>
              </li>
             ))
      }
        </ul>
      );
    }
    return '';
  }

  render() {
    return (
      <div className="addedCoursesList" >
        <div className="main" >
          {this.mapCourses()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courseListReducer.courses,
    totalCredits: state.courseListReducer.totalCredits,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    deleteElement: course => dispatch(actions.removeFromCourseList(course)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddedCoursesList);
