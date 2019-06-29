import React, { Component } from "react";
import { Link } from "react-router-dom";
import {configData} from '../../data/config';

class Navbar extends Component {
  render() {
    console.log('props------ to check', this.props);
    return (
      <div className="navbar-fixed  clearfix">
        <div className='logo-lading-page'></div>
        <ul className="menu">
            <li><a href="javascript:void(0)" className='invitation-landing-page'>Invitation</a>|</li>
            <li><a href="javascript:void(0)" className='cards-landing-page'>Cards</a>|</li>
            <li><a href="javascript:void(0)" className='party-ideas-landing-page'>Party idea</a></li>
            
        </ul>
        
        
        
        {/* <div className="nav-wrapper"> */}
        <div className="headerRight">
       
        <Link to="/signup" className="register-text">Register</Link>
        <span>|</span>
        <Link to="/login" className="register-text">Signin</Link>
        
         <div className='searchbar-landing-page'>
           <input type="text" placeholder="Search your card"/>
           <i className="searchIcon"></i>
        </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Navbar;
