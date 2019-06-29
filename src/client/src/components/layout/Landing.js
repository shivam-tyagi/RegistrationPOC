import React, { Component } from "react";
import { Link } from "react-router-dom";
import {configData , templateLayouts, landing_top_carousel_images, landing_bottom_carousel_images} from "../../data/config";
import ImageCarouselForLogin from "../imageCarouselLogin/ImageCarouselForLogin";
import Navbar from './Navbar';

class Landing extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div style={{ height: "100%" }} className=" valign-wrapper landingPage">
        <Navbar {...this.props}></Navbar>
        <div className="">
          <div className="center-align ">
             <div className="content_section">
             <div className="contain upperBanner">
             <ImageCarouselForLogin images = {landing_top_carousel_images} landingPage='true'></ImageCarouselForLogin>
               </div>
           
            <div className="trendingImageContainer">
            <div className="contain"> 
              <div className="tradingInner">
               <div className="trading-cell">
              <div className='trending-text-label'>Trending</div>
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
                  </div>
              </div>
            </div>
            </div>
            
            
            
            <div className="clearfix section_banner">
              <div className="contain">
            <ImageCarouselForLogin images = {landing_bottom_carousel_images} landingPage='true'></ImageCarouselForLogin>
            </div>
            </div>
            
            <div className="footer">
             <div className="contain">
              <div className='landing-page-social-media-icons'>
               <div className="bottomSection clearfix">
                  <ul className="footer_social_list">
                    <li><a href="javascript:void(0)" className="Socialicon googleIcon"></a></li>
                    <li><a href="javascript:void(0)" className="Socialicon linkedinIcon"></a></li>
                    <li><a href="javascript:void(0)" className="Socialicon facebookIcon"></a></li>
                  </ul>
                  
                  <ul className="googleStroe">
                  <li><a href="javascript:void(0)" className="googlePic"></a></li>
                  <li><a href="javascript:void(0)" className="storePic"></a></li>
                    </ul>
                 </div>
          </div>
            <div className='landing-page-copyright-text'>
             <p className="demoCopy">© 2019 Demo Company . All Rights Reserved.</p>
             <p>Demo Company are trademarks of Demo Company in the United States and other countries. The Demo Company logo and all other Demo-related trademarks are trademarks of Demo Comapny,Inc. Please use this mark only to refer to our services. Users of website designs must be of legal drinking age. </p>
              <div className="footerBottom">
                <a href="javascript:void(0)">Privacy Policy</a>
                <a href="javascript:void(0)">Terms of Service</a>
              </div>
            </div>
            </div>
            
            </div>



           
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
