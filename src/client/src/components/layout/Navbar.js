import React, { Component } from "react";
import { Link } from "react-router-dom";
import {configData} from '../../data/config';

class Navbar extends Component {
  render() {
    console.log('props------ to check', this.props);
    return (
      <div className="navbar-fixed">
        <div className='logo-lading-page'></div>
        <div className='invitation-landing-page'>Invitation</div>
        <div className='cards-landing-page'>Cards</div>
        <div className='party-ideas-landing-page'>Party idea</div>
        <div className='searchbar-landing-page'></div>
        {/* <div className="nav-wrapper"> */}
        <Link to="/signup" className="register-text">Register</Link>
        <Link to="/login" className="register-text">Login</Link>
        {/* </div> */}
      </div>
    );
  }
}

export default Navbar;
