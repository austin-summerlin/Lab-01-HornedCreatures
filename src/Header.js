import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img
          className="image"
          alt="horned creatures"
          src="images.url"
        />
      </header>
    );
  }
}
export default Header;