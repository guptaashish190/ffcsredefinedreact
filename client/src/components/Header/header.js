import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="menu-items">
          <Link to="/" >HOME</Link>
          <Link to="/login" >LOGIN</Link>
          <Link to="/about" >ABOUT</Link>
        </div>
        <div className="redefined-text">
          <div>FFCS</div>&nbsp;<div>REDEFINED</div>
        </div>
      </div>
    );
  }
}

export default Header;
