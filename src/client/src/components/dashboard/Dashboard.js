import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/actions";
// import {configData} from '../../data/config';
import Navbar from '../layout/Navbar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.showFavouriteEvents = this.showFavouriteEvents.bind(this);
    this.showDraftedEvents = this.showDraftedEvents.bind(this);
    this.showUpcomingEvents = this.showUpcomingEvents.bind(this);
    this.showCompletedEvents = this.showCompletedEvents.bind(this);
    this.state = {
      templateListToShow: 'fav'
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  showFavouriteEvents = () => {
    console.log('showFavouriteList');
    this.setState({
      templateListToShow: 'fav'
    });
  }

  showDraftedEvents = () => {
    console.log('showDraftedEvents');
    this.setState({
      templateListToShow: 'drafted'
    });
  }

  showUpcomingEvents = () => {
    console.log('showUpcomingEvents');
    this.setState({
      templateListToShow: 'upcoming'
    });
  }

  showCompletedEvents = () => {
    console.log('showCompletedEvents');
    this.setState({
      templateListToShow: 'completed'
    });
  }

  render() {
    const { user } = this.props.auth;
    const templatesData = this.props.userTemplatesData;
    console.log("user name-->",templatesData , this.state.templateListToShow);
    return (
      <div style={{ height: "100%" }} className=" valign-wrapper dashboard">
        <Navbar {...this.props}></Navbar>
        <div className="clearfix dashboardWrapper">
          <div className='dashboard-left-container'>
            <div className='dashboard-btn-container'>
              <div className='favourite-events-btn sidebtn' onClick={() => this.showFavouriteEvents()}><i></i>Favourite</div>
              <div className='drafted-events-btn sidebtn active' onClick={() => this.showDraftedEvents()}><i></i>Drafted</div>
              <div className='upcoming-events-btn sidebtn' onClick={() => this.showUpcomingEvents()}><i></i>Upcoming</div>
              <div className='completed-events-btn sidebtn' onClick={() => this.showCompletedEvents()}><i></i>Completed</div>
            </div>
          </div>
          <div className='dashboard-right-container'>

           <div className="dashboardUpper">
                    <div className="searchWrapper">
                       <input type="text" placeholder="Search Design"/>
                       <i className="searchIcon"></i>
                    </div>
           </div>
            <div className='right-container-data'>
              <div className='dashboard-search-field'></div>
              <div className='dashboard-templatesData'>
                <div className='dashboard-templates-container'>
                    { this.state.templateListToShow === 'fav' ?
                        <div id='favTemplatesList' className="trendingImageElems">
                          {
                            templatesData.map((template, index) => {
                              return ( template.isFavourite && (
                                <div key={'fev' + index} className="image-container" onClick={() => this.templatesClickHandler(template.template_id)}>
                                  <img src={template.template_image} alt="img"></img>
                                  <span className='template-name'>{template.template_name}</span>
                                  <span className='template-description'>{template.template_description}</span>
                                  <div className='love-symbol'></div>
                                </div>)
                              );
                            })
                          }
                        </div> : null
                    }
                    { this.state.templateListToShow === 'drafted' ?
                        <div id='draftedTemplatesList' className="trendingImageElems">
                          {
                            templatesData.map((template, index) => {
                              return ( template.isDrafted && (
                                <div key={'drafted' + index} className="image-container" onClick={() => this.templatesClickHandler(template.template_id)}>
                                  <img src={template.template_image} alt="img"></img>
                                  <span className='template-name'>{template.template_name}</span>
                                  <span className='template-description'>{template.template_description}</span>
                                  <div className='drafted-symbol'></div>
                                </div>)
                              );
                            })
                          }
                        </div> : null
                    }
                    { this.state.templateListToShow === 'upcoming' ?
                        <div id='upcomingTemplatesList' className="trendingImageElems">
                          {
                            templatesData.map((template, index) => {
                              return (template.isDrafted && (
                                <div key={'upcoming' + index} className="image-container" onClick={() => this.templatesClickHandler(template.template_id)}>
                                  <img src={template.template_image} alt="img"></img>
                                  <span className='template-name'>{template.template_name}</span>
                                  <span className='template-description'>{template.template_description}</span>
                                  <div className='drafted-symbol'></div>
                                </div>)
                              );
                            })
                          }
                        </div> : null
                    }
                    { this.state.templateListToShow === 'completed' ?
                        <div id='completedTemplatesList' className="trendingImageElems">
                          {
                            templatesData.map((template, index) => {
                              return ( template.isCompleted && (
                                <div key={'completed' + index} className="image-container" onClick={() => this.templatesClickHandler(template.template_id)}>
                                  <img src={template.template_image} alt="img"></img>
                                  <span className='template-name'>{template.template_name}</span>
                                  <span className='template-description'>{template.template_description}</span>
                                  <div className='drafted-symbol'></div>
                                </div>)
                              );
                            })
                          }
                        </div> : null
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  userTemplatesData: state.userTemplatesData
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
