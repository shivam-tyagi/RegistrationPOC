import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ImageCarouselForLogin extends Component {

  constructor() {
    super();
    this.slideIndex = 0;
  }

  componentDidMount() {
    // console.log('should component mount');
    this.startCarouselAnimation();
  };

  // shouldComponentUpdate() {
  //   this.startCarouselAnimation();
  // };

  startCarouselAnimation() {
    // console.log('in carousel animation');
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    // console.log('this.slideIndex old', this.slideIndex);
    this.slideIndex++;
    // console.log('this.slideIndex updated', this.slideIndex);
    if (this.slideIndex > slides.length) {this.slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active";
    // setTimeout(this.startCarouselAnimation, 2000); // Change image every 2 seconds
  };
  

  render() {
    // const { user } = this.props.auth;
    const imagesPath = this.props.images;
    // console.log('props---', {...this.props}, imagesPath);
    // console.log("user name-->",user );
    return (
      <div className='imageCarouselConatainer slideshow-container'>
        <h2> ImageCarousel</h2>
        <div className="mySlides fade">
          <img src={imagesPath[1]} alt="1"/>
        </div>

        <div className="mySlides fade">
          <img src={imagesPath[2]} alt="2"/>
        </div>

        <div className="mySlides fade">
          <img src={imagesPath[3]} alt="3"/>
        </div>

        <div className='carousel-btn-container'>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }
}

ImageCarouselForLogin.propTypes = {
  logoutUser: PropTypes.func,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {  }
)(ImageCarouselForLogin);