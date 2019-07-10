import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Navbar from '../layout/Navbar';

class TemplatesEditComponent extends Component {

  constructor(props) {
    // console.log('this.props---', props.editIndex);
    super(props);
    this.editCarouselImagesclick = this.editCarouselImagesclick.bind(this);
    this.editIndex = props.editIndex;
    // console.log('landingPageTemplateData', props.landingPageTemplateData, this.editIndex);
    const landingPageTemplateData = props.landingPageTemplateData;
    this.state = {
      eventTitle: landingPageTemplateData[this.editIndex].data.eventTitle,
      eventFestival: landingPageTemplateData[this.editIndex].data.eventFestival,
      eventHostedby: landingPageTemplateData[this.editIndex].data.eventHostedby,
      eventMobilenumber: landingPageTemplateData[this.editIndex].data.eventMobilenumber,
      eventDate: landingPageTemplateData[this.editIndex].data.eventDate,
      eventTime: landingPageTemplateData[this.editIndex].data.eventTime,
      eventEndTime: landingPageTemplateData[this.editIndex].data.eventEndTime,
      eventLocation: landingPageTemplateData[this.editIndex].data.eventLocation,
      eventAddress: landingPageTemplateData[this.editIndex].data.eventAddress,
      eventMessageFromHost: landingPageTemplateData[this.editIndex].data.eventMessageFromHost,
    };
  }

  // componentDidMount() {
  //   this.startCarouselAnimation();
  // };

  editCarouselImagesclick(editIndex) {
    const landingPageTemplateData = this.props.landingPageTemplateData;
    this.editIndex = editIndex;
    // console.log('this===', editIndex, landingPageTemplateData);
    this.setState({
      eventTitle: landingPageTemplateData[editIndex].data.eventTitle,
      eventFestival: landingPageTemplateData[editIndex].data.eventFestival,
      eventHostedby: landingPageTemplateData[editIndex].data.eventHostedby,
      eventMobilenumber: landingPageTemplateData[editIndex].data.eventMobilenumber,
      eventDate: landingPageTemplateData[editIndex].data.eventDate,
      eventTime: landingPageTemplateData[editIndex].data.eventTime,
      eventEndTime: landingPageTemplateData[editIndex].data.eventEndTime,
      eventLocation: landingPageTemplateData[editIndex].data.eventLocation,
      eventAddress: landingPageTemplateData[editIndex].data.eventAddress,
      eventMessageFromHost: landingPageTemplateData[editIndex].data.eventMessageFromHost,
    });
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const templateEditInfo = {
      eventTitle: this.state.eventTitle,
      eventFestival: this.state.eventFestival,
      eventHostedby: this.state.eventHostedby,
      eventMobilenumber: this.state.eventMobilenumber,
      eventDate: this.state.eventDate,
      eventTime: this.state.eventTime,
      eventEndTime: this.state.eventEndTime,
      eventLocation: this.state.eventLocation,
      eventAddress: this.state.eventAddress,
      eventMessageFromHost: this.state.eventMessageFromHost,
    };

    // console.log('template edit info**', templateEditInfo);

    // this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { user } = this.props.auth;
    const landingPageTemplateData = this.props.landingPageTemplateData;
    // console.log('edit index-----', this.props.landingPageTemplateData, this.props);
    return (
      <div className='templates-edit-page'>
        <Navbar {...this.props}></Navbar>
        <div className="upperHead">
          {/* <a href="javascript:void(0)"><i className="headIcon"></i>Card List</a> */}
          <Link to="/"><i className="headIcon"></i> Card List</Link>
        </div>
         
        <div className="clearfix">

          <div className='template-edit-left-container'>
            <div className='template-carousel'>
              <div className='templateEditLeftSideBtn'/>
              <div className="templates-carousel-container-wrapper">
              <div className='templates-carousel-container'>
                {
                  landingPageTemplateData.map((elem, index) => {
                    return (
                      <img 
                        className="template-carousel-image" 
                        key={index} 
                        src={landingPageTemplateData[index].template_image} 
                        alt='template'
                        onClick={() => this.editCarouselImagesclick(index)}
                      />
                    );
                  })
                }
              </div>
              </div>


              <div className='templateEditRightSideBtn'/>
            </div>
            <div className="template-edit-container-text clearfix">
            <strong>{landingPageTemplateData[this.editIndex].template_name}</strong>
            <span>{landingPageTemplateData[this.editIndex].template_description}</span>
            </div>
            <div className='template-edit-container'>
                <img className='template-edit-bg' src={landingPageTemplateData[this.editIndex].template_image} alt='edit'/>
                <div className='hostedby-edit-image bannerText'>Host: {this.state.eventHostedby}</div>
                <div className='festival-edit-image bannerText'>Festival: {this.state.eventFestival}</div>
                <div className='mobilenumber-edit-image bannerText'>Mobile no. {this.state.eventMobilenumber}</div>
                <div className='eventdate-edit-image bannerText'>Date: {this.state.eventDate}</div>
                <div className='eventtime-edit-image bannerText'>Time: {this.state.eventTime}</div>
                <div className='location-edit-image bannerText'>Location: {this.state.eventLocation}</div>
                <div className='address-edit-image bannerText'>Address: {this.state.eventAddress}</div>
                <div className='hostmsg-edit-image bannerText'>Message: {this.state.eventMessageFromHost}</div>
            </div>
          </div>

          <div className='template-edit-right-container'>
            <div className='template-edit-form-container'>
              <div className='template-form-heading'>Enter Details</div>
              <div className='template-edit-form'>
                <form  onSubmit={this.onSubmit} className="clarfix">
                    <div className="input-field ">
                      <input required id="eventTitle" type="text" value={this.state.eventTitle} onChange={this.onChange}/>
                      <label htmlFor="eventTitle" className={this.state.eventTitle == '' ? '' : 'active'}>Event Title *</label>
                    </div>

                    <div className="input-field">
                      <input id="eventFestival" type="text"value={this.state.eventFestival} onChange={this.onChange}/>
                      <label htmlFor="eventFestival" className={this.state.eventFestival == '' ? '' : 'active'}>Festival</label>
                    </div>

                    <div className="input-field">
                      <input required id="eventHostedby" type="text" value={this.state.eventHostedby} onChange={this.onChange}/>
                      <label htmlFor="eventHostedby" className={this.state.eventHostedby == '' ? '' : 'active'}>Hosted By*</label>
                    </div>

                    <div className="input-field">
                      <input id="eventMobilenumber" type="text" value={this.state.eventMobilenumber} onChange={this.onChange}/>
                      <label htmlFor="eventMobilenumber" className={this.state.eventMobilenumber == '' ? '' : 'active'}>Mobile</label>
                    </div>

                    <div className="input-field">
                      <input required id="eventDate" type="date" value={this.state.eventDate} onChange={this.onChange}/>
                      <label htmlFor="eventDate" className={this.state.eventDate == '' ? '' : 'active'}>Event Date</label>
                    </div>

                    <div className="input-field">
                      <input required id="eventTime" type="text" value={this.state.eventTime} onChange={this.onChange}/>
                      <label htmlFor="eventTime" className={this.state.eventTime == '' ? '' : 'active'}>Event Time</label>
                    </div>

                    <div className="input-field">
                      <input id="eventEndTime" type="text" value={this.state.eventEndTime} onChange={this.onChange}/>
                      <label htmlFor="eventEndTime" className={this.state.eventEndTime == '' ? '' : 'active'}>Event End Time</label>
                    </div>

                    <div className="input-field input-fieldName">
                      <input id="eventLocation" type="text" value={this.state.eventLocation} onChange={this.onChange}/>
                      <label htmlFor="eventLocation" className={this.state.eventLocation == '' ? '' : 'active'}>Location Name</label>
                    </div>

                    <div className="input-field input-fieldAddress">
                      <input id="eventAddress" type="text" value={this.state.eventAddress} onChange={this.onChange}/>
                      <label htmlFor="eventAddress" className={this.state.eventAddress == '' ? '' : 'active'}>Address</label>
                    </div>

                    <div className="input-field input-fieldMessage">
                      <input id="eventMessageFromHost" type="text" value={this.state.eventMessageFromHost} onChange={this.onChange}/>
                      <label htmlFor="eventMessageFromHost" className={this.state.eventMessageFromHost == '' ? '' : 'active'}>Host Message</label>
                    </div>

                    <div className="submitFormBtns " >
                      
                      <button className='save-draft-btn saveButton'>Save Draft</button>


                      <button type="submit"  className=" btn btn-large waves-effect waves-light hoverable blue accent-3" >
                        Continue
                      </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

TemplatesEditComponent.propTypes = {
  // logoutUser: PropTypes.func,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return{
    auth: state.auth,
    editIndex: state.editIndex,
    landingPageTemplateData: state.landingPageTemplateData,
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
)(TemplatesEditComponent);
