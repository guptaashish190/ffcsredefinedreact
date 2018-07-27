import React from 'react';
import shortID from 'shortid';

class NotificationDialog extends React.Component {
    onAcceptClick = () => {
      this.props.onAcceptClick();
    //   this.state.render = false;
    }
    onCancelClick = () => {
      this.props.onCancelClick();
    //   this.state.render = false;
    }
    mapErrors = () => {
      if (this.props.errors) {
        return this.props.errors.map(error => <li key={shortID.generate()} className="n-error">{error}</li>);
      }
      return '';
    }
    mapSuccess = () => {
      if (this.props.success) {
        return this.props.success.map(noti => <li key={shortID.generate()} className="n-success">{noti}</li>);
      }
      return '';
    }
    render() {
      return (
        <div className="notifications-container">
          <div className="notifications">
            <ul className="error-notifications">
              {this.mapErrors()}
            </ul>
            <ul className="success-notifications">
              {this.mapSuccess()}
            </ul>
          </div>
          <div className="options">
            <button onClick={() => this.onAcceptClick()} className="accept-button" >OK</button>
            <button onClick={() => this.onCancelClick()} className="cancel-button">CANCEL</button>
          </div>
        </div>
      );
    }
}

export default NotificationDialog;
