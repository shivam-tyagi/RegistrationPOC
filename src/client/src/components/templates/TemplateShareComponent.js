import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Navbar from '../layout/Navbar';

class TemplatesShareComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guestList: "",
    }
  }

  onChange = e => {
    this.setState({
      guestList: e.target.value,
    });
  }

  deleteAll = () => {
    this.setState({
      guestList: '',
    })
  }

  render(){
    return(
      <div className='templates-share-page'>
        <Navbar {...this.props}></Navbar>
        <div className="upperHead">
          <Link to="/edit"><i className="headIcon"></i> Edit Card</Link>
        </div>
        <div className='share-page-container'>
          <div className='template-share-container-left'>
            <div className='template-to-share'>
              <div className='share-template-img'>

              </div>
              <div className='template-data'>
                <div className='share-template-title'>
                  Template title
                </div>
                <div className='template-share-link'>

                </div>
              </div>
            </div>
            <div className='guest-list-container'>
              <div> Add Guests by email or phone</div>
              <div className='import-contact-btn'>Import Contact</div>
              <div className='upload-contact-btn'>Upload Contact</div>
              <div className='deleteall-btn' onClick={this.deleteAll}>Delete All</div>
              <div className='add-contact-textarea'>
                <input id="eventTitle" value={this.state.guestList} onChange={this.onChange} type="text" placeholder='Enter or pPaste emails or phone numbers seperated by semi-colons.' />
              </div>
              <div className='add-guests-btn'>Add Guest</div>
            </div>
          </div>
          <div className='template-share-container-right'>
            <div>Guest List</div>
            <div>Guest list is currently blank</div>
            <div className='save-sent-later-btn'>Save &amp; Sent Later</div>
            <div className='finish-sent-btn'>Finish Send</div>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return{
    auth: state.auth,
    editId: state.editId,
    landingPageTemplateData: state.landingPageTemplateData,
    userTemplatesData: state.userTemplatesData,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // closeSidenavHandler: (value) => {
    //   dispatch(onCloseSidenav(value));
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemplatesShareComponent);
