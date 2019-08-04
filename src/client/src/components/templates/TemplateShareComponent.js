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
      <div className='templates-edit-page templates-share-page'>
        <Navbar {...this.props}></Navbar>
        <div className="upperHead">
          <Link to="/edit"><i className="headIcon"></i> Edit Card</Link>
        </div>
        <div className='share-page-container'>
          <div className='template-share-container-left'>
            <div className='template-to-share clearfix'>
              <div id="appendScreenshot" className='share-template-img'>

              </div>
              <div className='template-data'>
                <h2 className='share-template-title'>
                   Christmas Celibration
                </h2>
                <div className='template-share-link'>
                      <span>Share event link with guests</span>
                      <ul className="social_list"><li><a href="javascript:void(0)" className="Socialicon googleIcon"></a></li><li><a href="javascript:void(0)" className="Socialicon linkedinIcon"></a></li><li><a href="javascript:void(0)" className="Socialicon facebookIcon"></a></li></ul>
                      <a href="https://xd.adobe.com/view/456" target="_blank" className="adobeLink">https://xd.adobe.com/view/456</a>
                </div>
              </div>
            </div>
            <div className='guest-list-container'>
              <h3> Add Guests by email or phone</h3>
               <div className="contactWrapper">
                  <a href="javascript:void(0)" className='import-contact-btn'>Import Contact</a>
                  <a href="javascript:void(0)" className='upload-contact-btn'>Upload Contact</a>
               </div>
               <div className="inputDeleteWrapper">
                  <a className='deleteall-btn' onClick={this.deleteAll}chref="javascript:void(0)">Delete All</a>
                  <div className='add-contact-textarea'>
                    <input id="eventTitle" value={this.state.guestList} onChange={this.onChange} type="text" placeholder='Enter or pPaste emails or phone numbers seperated by semi-colons.' />
                  </div>
               </div>
              {/* <div className='add-guests-btn'>Add Guest</div> */}
            </div>
          </div>
          <div className='template-share-container-right'>
            <h2>Guest List</h2>
            {/* <div>Guest list is currently blank</div>
            <div className='save-sent-later-btn'>Save &amp; Sent Later</div>
            <div className='finish-sent-btn'>Finish Send</div> */}

              <div className="tableWrapper">
                   <table>
                         <thead>
                             <tr>
                                 <th>Name</th>
                                 <th>Email/Mobile</th>
                                 <th>Action</th>
                             </tr>
                         </thead>
                          <tbody>
                             <tr>
                                 <td>Shivam Tyagi</td>
                                 <td>Shivam@gmail.com</td>
                                 <td><a href="javascript:void(0)">Edit</a><a href="javascript:void(0)">Delete</a></td>
                             </tr>
                             <tr>
                                 <td>Shivam Tyagi</td>
                                 <td>Shivam@gmail.com</td>
                                 <td><a href="javascript:void(0)">Edit</a><a href="javascript:void(0)">Delete</a></td>
                             </tr>
                             <tr>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                               </tr>
                               <tr>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                               </tr>
                               <tr>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                               </tr>
                               <tr>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                               </tr>
                               <tr>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                               </tr>
                          </tbody>

                      
                     </table>
              </div>
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
