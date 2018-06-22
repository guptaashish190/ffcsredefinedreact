import React from 'react';
import Timetable from './Timetable/timetable';
import PrefPanel from './PreferencePanel/prefPanel';

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <PrefPanel />
        <Timetable />
      </div>
    );
  }
}
export default Body;
