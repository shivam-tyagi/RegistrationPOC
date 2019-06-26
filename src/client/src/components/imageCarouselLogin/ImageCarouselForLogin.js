import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ImageCarouselForLogin extends Component {

  constructor() {
    super();
    this.slideIndex = 0;
    this.carouselImages = new Map();
    this.carouselDots = new Map();
  }

  componentDidMount() {
    this.startCarouselAnimation();
  };

  startCarouselAnimation() {
    let i;
    // let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    // console.log('this.carouselImages.', this.carouselImages);
    for (i = 0; i < this.carouselImages.size; i++) {
      // console.log('this.carouselImages.', this.carouselImages.get(i));
      this.carouselImages.get(i).style.display = "none";  
    }
    
    this.slideIndex++;
    if (this.slideIndex > this.carouselImages.size) {this.slideIndex = 1}

    for (i = 0; i < this.carouselDots.size; i++) {
      this.carouselDots.get(i).className = this.carouselDots.get(i).className.replace(" active", "");
    }
    this.carouselImages.get(this.slideIndex-1).style.display = "block";  
    this.carouselDots.get(this.slideIndex-1).className += " active";
    setTimeout(this.startCarouselAnimation.bind(this), 2000); // Change image every 2 seconds
  };
  

  render() {
    // const { user } = this.props.auth;
    // console.log("user name-->",user );
    const imagesPath = this.props.images;
    return (
      <div className='imageCarouselConatainer slideshow-container'>
        <h2>Welcome to eCards</h2>
        <div className="parentElem">
          {
            imagesPath.map((elem, index) => {
              return (
                <div className="mySlides fade" key={index} ref={c => this.carouselImages.set(index, c)}>
                  <img src={imagesPath[index].imageSrc} alt={index}/>
                  <h6>{imagesPath[index].headingText}</h6>
                  <p>{imagesPath[index].brief}</p>
                </div>
              );
            })
          }
        </div>

        <div className='carousel-btn-container'>
          {
            imagesPath.map((ele, index) => {
              return (
                <span className="dot" key={index} ref={c => this.carouselDots.set(index, c)}></span>
              );
            })
          }
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