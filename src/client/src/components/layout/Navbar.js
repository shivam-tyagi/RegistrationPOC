import React, { Component } from "react";
import { Link } from "react-router-dom";
import {configData} from '../../data/config';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0" style={{
          backgroundColor: `${configData.header.headerColor}`,
        }}>
          {/* <div className="nav-wrapper white"> */}
          <div className="nav-wrapper">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                backgroundColor: `${configData.header.headerLogoBgColor}`,
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">{configData.header.headerLogo[1]}</i>
              Registration Portal
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
