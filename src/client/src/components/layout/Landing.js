import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {configData , templateLayouts, landing_top_carousel_images, landing_bottom_carousel_images} from "../../data/config";
import ImageCarouselForLogin from "../imageCarouselLogin/ImageCarouselForLogin";
import Navbar from './Navbar';
import { editTemplateValue, landingPageTemplatesData } from '../../actions/actions';

class Landing extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
    this.templatesClickHandler = this.templatesClickHandler.bind(this);
  }

  componentDidMount() {
    const { defaultTemplatesData } = this.props;
    defaultTemplatesData(templateLayouts);
  }

  templatesClickHandler (templateInd){
    // console.log('templates cick handler', this.props);
    const { selectedTemplateIndex } = this.props;
    selectedTemplateIndex(templateInd);
    // if (this.props.auth.isAuthenticated) {
      this.props.history.push("/edit");
    // }
  }

  render() {
    return (
      <div style={{ height: "100%", backgroundColor: `${configData.landingPageBg}`, }} className="container valign-wrapper landingPage">
        <Navbar {...this.props}></Navbar>
        <div className="row">
          <div className="col s12 center-align ">
            <ImageCarouselForLogin images = {landing_top_carousel_images} landingPage='true'></ImageCarouselForLogin>
            <div className="trendingImageContainer">
              <div className='trending-text-label'>Trending</div>
              <div className="trendingImageElems">
                {
                  templateLayouts.map((template, index) => {
                    return (
                      // eslint-disable-next-line react/no-array-index-key
                      <div key={index} className="image-container" onClick={() => this.templatesClickHandler(index)}>
                        <img src={template.template_image} alt="img"></img>
                        <span className='template-name'>{template.template_name}</span>
                        <span className='template-description'>{template.template_description}</span>
                        <div className='love-symbol'></div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <ImageCarouselForLogin images = {landing_bottom_carousel_images} landingPage='true'></ImageCarouselForLogin>
            <div className='landing-page-social-media-icons'>
              Social Media Icons
            </div>
            <div className='landing-page-copyright-text'> Copy right text</div>
            {/* <h3>This is a home page</h3>
            <h4>
              <b>Register</b> yourself with us.{" "}
            </h4>
            <p className="flow-text grey-text text-darken-1">
             Login to see your details.
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/signup"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => {
  return {
    selectedTemplateIndex: (value) => {
      dispatch(editTemplateValue(value));
      // console.log('selectedTemplateIndex', value);
    },
    defaultTemplatesData: (value) => {
      dispatch(landingPageTemplatesData(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);


// export default Landing;
