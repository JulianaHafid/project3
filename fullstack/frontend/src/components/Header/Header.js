import React, { Component } from 'react';
import axios from 'axios';

import Nav from '../Nav/Nav';

import './Header.css';

/**
 * About
 */
export class Header extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
        <div>
      <nav className="navbar navbar-toggleable-md mb-4 top-bar navbar-static-top sps sps--abv">
        <div className="container">
          <a className="navbar-brand">JOB<span>search</span></a>
          <div className="collapse navbar-collapse" id="navbarCollapse1">
            <Nav/>
          </div>
        </div>
      </nav>
        </div>
    );
  }
}


export default Header;
