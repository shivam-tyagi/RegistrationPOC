import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {configData} from '../../data/config';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfileData: false
    }

    this.myProfilesBtnClick = this.myProfilesBtnClick.bind(this);
  }

  myProfilesBtnClick = () => {
    this.setState({
      showProfileData: !this.state.showProfileData
    });
  }

  render() {
    console.log('props------ in header******', this.props);
    const isLoggedIn = this.props.auth.isAuthenticated
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
          <div className="header-authentication-buttons">
            { isLoggedIn ?
              <React.Fragment>
                <div className="my-cards-header-btn"></div>
                <div className="my-profile-name" onClick={() => this.myProfilesBtnClick()}></div>
              </React.Fragment> :
              <React.Fragment>
                <Link to="/signup" className="register-text">Register</Link>
                <span>|</span>
                <Link to="/login" className="register-text">Signin</Link>
              </React.Fragment>
            }
          </div>
          
          <div className='searchbar-landing-page'>
            <input type="text" placeholder="Search your card"/>
            <i className="searchIcon"></i>
          </div>
        </div>
        { this.state.showProfileData ? 
          <div className='my-profile-container'>
            <div>My Profiles</div>
            <div>My Details</div>
            <div>Sign Out</div>
          </div> :  null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => {
  return {
    // selectedTemplateIndex: (value) => {
      // dispatch(editTemplateValue(value));
      // console.log('selectedTemplateIndex', value);
    // },
    // defaultTemplatesData: (value) => {
      // dispatch(landingPageTemplatesData(value));
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

// export default Navbar;
