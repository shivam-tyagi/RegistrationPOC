import React, { Component } from "react";
import { Link } from "react-router-dom";
import {configData , templateLayouts, landing_top_carousel_images, landing_bottom_carousel_images} from "../../data/config";
import ImageCarouselForLogin from "../imageCarouselLogin/ImageCarouselForLogin";

class Landing extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div style={{ height: "100%", backgroundColor: `${configData.landingPageBg}`, }} className="container valign-wrapper landingPage">
        <div className="row">
          <div className="col s12 center-align ">
            <ImageCarouselForLogin images = {landing_top_carousel_images}></ImageCarouselForLogin>
            <div className="trendingImageContainer">
              <div className="trendingImageElems">
                {
                  templateLayouts.map((template, index) => {
                    return (
                      // eslint-disable-next-line react/no-array-index-key
                      <div key={index} className="image-container">
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
            <ImageCarouselForLogin images = {landing_bottom_carousel_images}></ImageCarouselForLogin>
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

export default Landing;
