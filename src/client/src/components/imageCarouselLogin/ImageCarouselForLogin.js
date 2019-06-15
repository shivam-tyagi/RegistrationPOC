import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ImageCarouselForLogin extends Component {
  render() {
    const { user } = this.props.auth;
    console.log("user name-->",user );
    return (
      <div className='imageCarouselConatainer'>
        <h2> ImageCarousel</h2>
        <img></img>
        <img></img>
        <img></img>
        <div className='carousel-btn-container'></div>
      </div>
    );
  }
}


ImageCarouselForLogin.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {  }
)(ImageCarouselForLogin);