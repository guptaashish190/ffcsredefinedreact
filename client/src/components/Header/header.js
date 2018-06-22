import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        FFCS REDEFINED

        <div className="themeChooser">
          <button onClick={() => this.props.changeTheme('green')} />
          <button onClick={() => this.props.changeTheme('blue')} />
          <button onClick={() => this.props.changeTheme('red')} />
          <button onClick={() => this.props.changeTheme('light')} />
        </div>
      </div>
    );
  }
}

export default Header;
