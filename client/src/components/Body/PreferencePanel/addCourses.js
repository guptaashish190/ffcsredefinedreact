import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import actions from '../../../actions/addCourseActions';

class AddCourses extends React.Component {
  constructor(props) {
    super(props);

    axios.get('http://localhost:3005/api/autosuggest').then((data) => {
      const mappedCourses = data.data.map(label => ({ value: label, label }));
      this.setState({
        suggestedCoursesList: mappedCourses,
      });
    });
  }

  state = {
    suggestedCoursesList: [],
    selectedOption: '',
  }

  onAddClick = () => {
    this.props.addToCourseList(this.state.selectedOption);
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption.label });
  }

  render() {
    return (
      <div className="addCourses">
        <Select
          name="form-field-name"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={this.state.suggestedCoursesList}
          className="reactSelect"
          onBlurResetsInput={false}
        />
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
