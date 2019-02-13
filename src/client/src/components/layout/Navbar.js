import React, { Component } from "react";
import { Link } from "react-router-dom";
import configData from '../../data/config';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                backgroundColor: `${configData.header.headerColor}`,
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">insert_photo</i>
              Registration Portal
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
