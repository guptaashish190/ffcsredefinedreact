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
                <span><div />{elem.CODE}</span>
                <span>{elem.TITLE} </span>
                <span>{elem.CREDITS} Credit(s)
                  <input type="button" onClick={() => this.props.deleteElement(elem.CODE)} />
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
        {this.mapCourses()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courseListReducer.courses,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    deleteElement: course => dispatch(actions.removeFromCourseList(course)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddedCoursesList);
