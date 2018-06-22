import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../actions/addCourseActions';

class AddCourses extends React.Component {
  state = {
    inputValue: '',
  }

  onAddClick = () => {
    this.props.addToCourseList(this.state.inputValue);
  }
  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  checkPressEnter = (e) => {
    if (e.keyCode === 13) {
      this.onAddClick();
    }
  }
  render() {
    return (
      <div className="addCourses">
        <input onKeyUp={e => this.checkPressEnter(e)} onChange={e => this.onInputChange(e)} type="text" placeholder="Add Course" list="autocompleteList" />
        <button onClick={() => this.onAddClick()} type="button">Add</button><br />
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
    addToCourseList: course => dispatch(actions.addToCourseList(course)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourses);
