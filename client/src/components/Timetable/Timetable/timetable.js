import React from 'react';
import { connect } from 'react-redux';
import Tablecell from './tableCell';
import TimetablePrefs from './ttPrefs';

class Timetable extends React.Component {
  render() {
    return (
      <div>
        <TimetablePrefs />
        <table className="timetable">
          <thead>
            <tr>
              <td rowSpan="2">THEORY</td>
              <td>Start</td>
              <td>8:00</td>
              <td>9:00</td>
              <td>10:00</td>
              <td>11:00</td>
              <td>12:00</td>
              <td>--</td>
              <Tablecell slot="LUNCH" />
              <td>14:00</td>
              <td>15:00</td>
              <td>16:00</td>
              <td>17:00</td>
              <td>18:00</td>
              <td>18:50</td>
              <td>19:00</td>
            </tr>
            <tr>
              <td>End</td>
              <td>8:00</td>
              <td>9:00</td>
              <td>10:00</td>
              <td>11:00</td>
              <td>12:00</td>
              <td>--</td>
              <Tablecell slot="LUNCH" />
              <td>14:00</td>
              <td>15:00</td>
              <td>16:00</td>
              <td>17:00</td>
              <td>18:00</td>
              <td>18:50</td>
              <td>19:50</td>
            </tr>
            <tr>
              <td rowSpan="2">LAB</td>
              <td>Start</td>
              <td>8:00</td>
              <td>8:46</td>
              <td>10:00</td>
              <td>10:46</td>
              <td>11:31</td>
              <td>12:16</td>
              <Tablecell slot="LUNCH" />
              <td>14:00</td>
              <td>14:46</td>
              <td>16:00</td>
              <td>16:46</td>
              <td>17:31</td>
              <td>18:16</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Start</td>
              <td>8:45</td>
              <td>9:30</td>
              <td>10:45</td>
              <td>11:30</td>
              <td>12:15</td>
              <td>13:00</td>
              <Tablecell slot="LUNCH" />
              <td>14:45</td>
              <td>15:30</td>
              <td>16:45</td>
              <td>17:30</td>
              <td>18:15</td>
              <td>19:00</td>
              <td>--</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2" className="days">MON</td>
              <Tablecell slot="TH" />
              <Tablecell added={this.props.slotState.A1} slot="A1" />
              <Tablecell added={this.props.slotState.F1} slot="F1" />
              <Tablecell added={this.props.slotState.D1} slot="D1" />
              <Tablecell added={this.props.slotState.TB1} slot="TB1" />
              <Tablecell added={this.props.slotState.TG1} slot="TG1" />
              <Tablecell slot="--" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.A2} slot="A2" />
              <Tablecell added={this.props.slotState.F2} slot="F2" />
              <Tablecell added={this.props.slotState.D2} slot="D2" />
              <Tablecell added={this.props.slotState.TB2} slot="TB2" />
              <Tablecell added={this.props.slotState.TG2} slot="TG2" />
              <Tablecell slot="--" />
              <Tablecell added={this.props.slotState.V3} slot="V3" />
            </tr>
            <tr className="alternateLabDarkenLine">
              <Tablecell slot="LA" />
              <Tablecell added={this.props.slotState.L1} slot="L1" />
              <Tablecell added={this.props.slotState.L2} slot="L2" />
              <Tablecell added={this.props.slotState.L3} slot="L3" />
              <Tablecell added={this.props.slotState.L4} slot="L4" />
              <Tablecell added={this.props.slotState.L5} slot="L5" />
              <Tablecell added={this.props.slotState.L6} slot="L6" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.L31} slot="L31" />
              <Tablecell added={this.props.slotState.L32} slot="L32" />
              <Tablecell added={this.props.slotState.L33} slot="L33" />
              <Tablecell added={this.props.slotState.L34} slot="L34" />
              <Tablecell added={this.props.slotState.L35} slot="L35" />
              <Tablecell added={this.props.slotState.L36} slot="L36" />
              <Tablecell slot="--" />
            </tr>
            <tr>
              <td rowSpan="2" className="days">TUE</td>
              <Tablecell slot="TH" />
              <Tablecell added={this.props.slotState.B1} slot="B1" />
              <Tablecell added={this.props.slotState.G1} slot="G1" />
              <Tablecell added={this.props.slotState.E1} slot="E1" />
              <Tablecell added={this.props.slotState.TC1} slot="TC1" />
              <Tablecell added={this.props.slotState.TA1} slot="TA1" />
              <Tablecell slot="--" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.B2} slot="B2" />
              <Tablecell added={this.props.slotState.G2} slot="G2" />
              <Tablecell added={this.props.slotState.E2} slot="E2" />
              <Tablecell added={this.props.slotState.TC2} slot="TC2" />
              <Tablecell added={this.props.slotState.TAA2} slot="TAA2" />
              <Tablecell slot="--" />
              <Tablecell added={this.props.slotState.V4} slot="V4" />
            </tr>
            <tr className="alternateLabDarkenLine">
              <Tablecell slot="LA" />
              <Tablecell added={this.props.slotState.L7} slot="L7" />
              <Tablecell added={this.props.slotState.L8} slot="L8" />
              <Tablecell added={this.props.slotState.L9} slot="L9" />
              <Tablecell added={this.props.slotState.L10} slot="L10" />
              <Tablecell added={this.props.slotState.L11} slot="L11" />
              <Tablecell added={this.props.slotState.L12} slot="L12" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.L37} slot="L37" />
              <Tablecell added={this.props.slotState.L38} slot="L38" />
              <Tablecell added={this.props.slotState.L39} slot="L39" />
              <Tablecell added={this.props.slotState.L40} slot="L40" />
              <Tablecell added={this.props.slotState.L41} slot="L41" />
              <Tablecell added={this.props.slotState.L42} slot="L42" />
              <Tablecell slot="--" />
            </tr>
            <tr>
              <td rowSpan="2" className="days">WED</td>
              <Tablecell slot="TH" />
              <Tablecell added={this.props.slotState.C1} slot="C1" />
              <Tablecell added={this.props.slotState.A1} slot="A1" />
              <Tablecell added={this.props.slotState.F1} slot="F1" />
              <Tablecell added={this.props.slotState.V1} slot="V1" />
              <Tablecell added={this.props.slotState.V2} slot="V2" />
              <Tablecell slot="--" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.C2} slot="C2" />
              <Tablecell added={this.props.slotState.A2} slot="A2" />
              <Tablecell added={this.props.slotState.F2} slot="F2" />
              <Tablecell added={this.props.slotState.TD2} slot="TD2" />
              <Tablecell added={this.props.slotState.TBB2} slot="TBB2" />
              <Tablecell slot="--" />
              <Tablecell added={this.props.slotState.V5} slot="V5" />
            </tr>
            <tr className="alternateLabDarkenLine">
              <Tablecell slot="LA" />
              <Tablecell added={this.props.slotState.L13} slot="L13" />
              <Tablecell added={this.props.slotState.L14} slot="L14" />
              <Tablecell added={this.props.slotState.L15} slot="L15" />
              <Tablecell added={this.props.slotState.L16} slot="L16" />
              <Tablecell slot="--" />
              <Tablecell slot="--" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.L43} slot="L43" />
              <Tablecell added={this.props.slotState.L44} slot="L44" />
              <Tablecell added={this.props.slotState.L45} slot="L45" />
              <Tablecell added={this.props.slotState.L46} slot="L46" />
              <Tablecell added={this.props.slotState.L47} slot="L47" />
              <Tablecell added={this.props.slotState.L48} slot="L48" />
              <Tablecell slot="--" />
            </tr>
            <tr>
              <td rowSpan="2" className="days">THU</td>
              <Tablecell slot="TH" />
              <Tablecell added={this.props.slotState.D1} slot="D1" />
              <Tablecell added={this.props.slotState.B1} slot="B1" />
              <Tablecell added={this.props.slotState.G1} slot="G1" />
              <Tablecell added={this.props.slotState.TE1} slot="TE1" />
              <Tablecell added={this.props.slotState.TCC1} slot="TCC1" />
              <Tablecell slot="--" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.D2} slot="D2" />
              <Tablecell added={this.props.slotState.B2} slot="B2" />
              <Tablecell added={this.props.slotState.G2} slot="G2" />
              <Tablecell added={this.props.slotState.TE2} slot="TE2" />
              <Tablecell added={this.props.slotState.TCC2} slot="TCC2" />
              <Tablecell slot="--" />
              <Tablecell added={this.props.slotState.V6} slot="V6" />
            </tr>
            <tr className="alternateLabDarkenLine">
              <Tablecell slot="LA" />
              <Tablecell added={this.props.slotState.L19} slot="L19" />
              <Tablecell added={this.props.slotState.L20} slot="L20" />
              <Tablecell added={this.props.slotState.L21} slot="L21" />
              <Tablecell added={this.props.slotState.L22} slot="L22" />
              <Tablecell added={this.props.slotState.L23} slot="L23" />
              <Tablecell added={this.props.slotState.L24} slot="L24" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.L49} slot="L49" />
              <Tablecell added={this.props.slotState.L50} slot="L50" />
              <Tablecell added={this.props.slotState.L51} slot="L51" />
              <Tablecell added={this.props.slotState.L52} slot="L52" />
              <Tablecell added={this.props.slotState.L53} slot="L53" />
              <Tablecell added={this.props.slotState.L54} slot="L54" />
              <Tablecell slot="--" />
            </tr>
            <tr>
              <td rowSpan="2" className="days">FRI</td>
              <Tablecell slot="TH" />
              <Tablecell added={this.props.slotState.E1} slot="E1" />
              <Tablecell added={this.props.slotState.C1} slot="C1" />
              <Tablecell added={this.props.slotState.TA1} slot="TA1" />
              <Tablecell added={this.props.slotState.TF1} slot="TF1" />
              <Tablecell added={this.props.slotState.TDD2} slot="TD1" />
              <Tablecell slot="--" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.E2} slot="E2" />
              <Tablecell added={this.props.slotState.C2} slot="C2" />
              <Tablecell added={this.props.slotState.TA2} slot="TA2" />
              <Tablecell added={this.props.slotState.TF2} slot="TF2" />
              <Tablecell added={this.props.slotState.TDD2} slot="TDD2" />
              <Tablecell slot="--" />
              <Tablecell added={this.props.slotState.V7} slot="V7" />
            </tr>
            <tr className="alternateLabDarkenLine">
              <Tablecell slot="LA" />
              <Tablecell added={this.props.slotState.L25} slot="L25" />
              <Tablecell added={this.props.slotState.L26} slot="L26" />
              <Tablecell added={this.props.slotState.L27} slot="L27" />
              <Tablecell added={this.props.slotState.L28} slot="L28" />
              <Tablecell added={this.props.slotState.L29} slot="L29" />
              <Tablecell added={this.props.slotState.L30} slot="L30" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.L55} slot="L55" />
              <Tablecell added={this.props.slotState.L56} slot="L56" />
              <Tablecell added={this.props.slotState.L57} slot="L57" />
              <Tablecell added={this.props.slotState.L58} slot="L58" />
              <Tablecell added={this.props.slotState.L59} slot="L59" />
              <Tablecell added={this.props.slotState.L60} slot="L60" />
              <Tablecell slot="--" />
            </tr>
            <tr>
              <td rowSpan="2" className="days">SAT</td>
              <Tablecell slot="TH" />
              <Tablecell added={this.props.slotState.V8} slot="V8" />
              <Tablecell added={this.props.slotState.X11} slot="X11" />
              <Tablecell added={this.props.slotState.X12} slot="X12" />
              <Tablecell added={this.props.slotState.Y11} slot="Y11" />
              <Tablecell added={this.props.slotState.Y12} slot="Y12" />
              <Tablecell slot="--" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.X21} slot="X21" />
              <Tablecell added={this.props.slotState.Z21} slot="Z21" />
              <Tablecell added={this.props.slotState.Y21} slot="Y21" />
              <Tablecell added={this.props.slotState.W21} slot="W21" />
              <Tablecell added={this.props.slotState.W22} slot="W22" />
              <Tablecell slot="--" />
              <Tablecell added={this.props.slotState.V9} slot="V9" />
            </tr>
            <tr className="alternateLabDarkenLine">
              <Tablecell slot="LA" />
              <Tablecell added={this.props.slotState.L71} slot="L71" />
              <Tablecell added={this.props.slotState.L72} slot="L72" />
              <Tablecell added={this.props.slotState.L73} slot="L73" />
              <Tablecell added={this.props.slotState.L74} slot="L74" />
              <Tablecell added={this.props.slotState.L75} slot="L75" />
              <Tablecell added={this.props.slotState.L76} slot="L76" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.L77} slot="L77" />
              <Tablecell added={this.props.slotState.L78} slot="L78" />
              <Tablecell added={this.props.slotState.L79} slot="L79" />
              <Tablecell added={this.props.slotState.L80} slot="L80" />
              <Tablecell added={this.props.slotState.L81} slot="L81" />
              <Tablecell added={this.props.slotState.L82} slot="L82" />
              <Tablecell slot="--" />
            </tr>
            <tr>
              <td rowSpan="2" className="days">SUN</td>
              <Tablecell slot="TH" />
              <Tablecell added={this.props.slotState.V10} slot="V10" />
              <Tablecell added={this.props.slotState.Y11} slot="Y11" />
              <Tablecell added={this.props.slotState.Y12} slot="Y12" />
              <Tablecell added={this.props.slotState.X11} slot="X11" />
              <Tablecell added={this.props.slotState.X12} slot="X12" />
              <Tablecell slot="--" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.Y21} slot="Y21" />
              <Tablecell added={this.props.slotState.Z21} slot="Z21" />
              <Tablecell added={this.props.slotState.X21} slot="X21" />
              <Tablecell added={this.props.slotState.W21} slot="W21" />
              <Tablecell added={this.props.slotState.W22} slot="W22" />
              <Tablecell slot="--" />
              <Tablecell added={this.props.slotState.V11} slot="V11" />
            </tr>
            <tr className="alternateLabDarkenLine">
              <Tablecell slot="LA" />
              <Tablecell added={this.props.slotState.L83} slot="L83" />
              <Tablecell added={this.props.slotState.L84} slot="L84" />
              <Tablecell added={this.props.slotState.L85} slot="L85" />
              <Tablecell added={this.props.slotState.L86} slot="L86" />
              <Tablecell added={this.props.slotState.L87} slot="L87" />
              <Tablecell added={this.props.slotState.L88} slot="L88" />
              <Tablecell slot="LUNCH" />
              <Tablecell added={this.props.slotState.L89} slot="L89" />
              <Tablecell added={this.props.slotState.L90} slot="L90" />
              <Tablecell added={this.props.slotState.L91} slot="L91" />
              <Tablecell added={this.props.slotState.L92} slot="L92" />
              <Tablecell added={this.props.slotState.L93} slot="L93" />
              <Tablecell added={this.props.slotState.L94} slot="L94" />
              <Tablecell slot="--" />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
// Map State and Dispatch to props
const mapStateToProps = state => ({
  slotState: state.timetableReducer,
});

export default connect(mapStateToProps)(Timetable);
