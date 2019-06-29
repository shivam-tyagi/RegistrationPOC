import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from '../layout/Navbar';

class TemplatesEditComponent extends Component {

  constructor(props) {
    // console.log('this.props---', props.editIndex);
    super();
    this.editIndex = props.editIndex;
    this.state = {
      eventTitle: '',
      eventFestival: '',
      eventHostedby: '',
      eventMobilenumber: '',
      eventDate: '',
      eventTime: '',
      eventEndTime: '',
      eventLocation: '',
      eventAddress: '',
      eventMessageFromHost: '',
    };
  }

  // componentDidMount() {
  //   this.startCarouselAnimation();
  // };

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
        <h2>edit page***</h2>
        <div className='template-edit-left-container'>
          <div className='template-carousel'>
            <div className='templateEditLeftSideBtn'/>
            <div className='templates-carousel-container'>
              {
                landingPageTemplateData.map((elem, index) => {
                  return (
                    <img className="template-carousel-image" key={index} src={landingPageTemplateData[index].template_image} alt='template'/>
                  );
                })
              }
            </div>
            <div className='templateEditRightSideBtn'/>
          </div>
          <div className='template-edit-container'>
              <img className='template-edit-bg' src={landingPageTemplateData[this.editIndex].template_image} alt='edit'/>
          </div>
        </div>

        <div className='template-edit-right-container'>
          <div className='template-edit-form-container'>
            <div className='template-form-heading'>Enter Details</div>
            <div className='template-edit-form'>
              <form  onSubmit={this.onSubmit}>
                  <div className="input-field ">
                    <input required id="eventTitle" type="text"/>
                    <label htmlFor="eventTitle">Event Title *</label>
                  </div>

                  <div className="input-field">
                    <input id="eventFestival" type="text"/>
                    <label htmlFor="eventFestival">Festival</label>
                  </div>

                  <div className="input-field">
                    <input required id="eventHostedby" type="text"/>
                    <label htmlFor="eventHostedby">Hosted By*</label>
                  </div>

                  <div className="input-field">
                    <input id="eventMobilenumber" type="text"/>
                    <label htmlFor="eventMobilenumber">Mobile</label>
                  </div>

                  <div className="input-field">
                    <input required id="eventDate" type="text"/>
                    <label htmlFor="eventDate">Event Date</label>
                  </div>

                  <div className="input-field">
                    <input required id="eventTime" type="text"/>
                    <label htmlFor="eventTime">Event Time</label>
                  </div>

                  <div className="input-field">
                    <input id="eventEndTime" type="text"/>
                    <label htmlFor="eventEndTime">Event End Time</label>
                  </div>

                  <div className="input-field">
                    <input id="eventLocation" type="text"/>
                    <label htmlFor="eventLocation">Location Name</label>
                  </div>

                  <div className="input-field">
                    <input id="eventAddress" type="text"/>
                    <label htmlFor="eventAddress">Address</label>
                  </div>

                  <div className="input-field">
                    <input id="eventMessageFromHost" type="text"/>
                    <label htmlFor="eventMessageFromHost">Host Message</label>
                  </div>

                  <div className="submitFormBtns" >
                    <button type="submit"  className="btn btn-large waves-effect waves-light hoverable blue accent-3" >
                      Continue
                    </button>
                    <button className='save-draft-btn'>Save Draft</button>
                  </div>
              </form>
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
