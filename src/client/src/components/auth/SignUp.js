import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/actions";
import classnames from "classnames";
import {configData, signup_carousel_images} from '../../data/config';
import ImageCarouselForLogin from '../imageCarouselLogin/ImageCarouselForLogin';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname:"",
      confirmPassword: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    };

    this.props.registerUser(newUser, this.props.history);
  };

  onBlurConfirmPassword = e => {
    console.log('on confirm password blur>>>',e);
    // e.target.value = '';
    if(this.state.password == this.state.confirmPassword){
      console.log('password validated');
      return;
    } else {
      console.log('password error>>>>');
      e.target.value = '';
      this.setState({
        confirmPassword: '',
        errors: {
          confirmPassword: 'Revalidate the password'
        }
      });
    }
  };

  closeBtnClickHandler = e => {
    console.log('close click handler', this.props);
    this.props.history.push("/");
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="signup-page-container">
        <div className="clearfix">
          <div className='signin-logo'></div>
          <div className='login-close-btn' onClick={this.closeBtnClickHandler}></div>
          <ImageCarouselForLogin images = {signup_carousel_images}></ImageCarouselForLogin>
          <div className=" signinTemplateContainer">
            {/* <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link> */}
            <div className="formWraper">
            <div>
              <h4> Create Account </h4>
              {/* <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p> */}
            </div>
            <form  onSubmit={this.onSubmit}>
              {configData.registrationSettings.showFirstName ? (
                <div className="input-field ">
                  <input required
                    onChange={this.onChange}
                    value={this.state.firstname}
                    error={errors.firstname}
                    id="firstname"
                    type="text"
                    className={classnames("", {
                      invalid: errors.firstname
                    })}
                  />
                  <label htmlFor="firstname">Firstname</label>
                  <span className="red-text">{errors.name}</span>
                </div>
              ) : null}
              {configData.registrationSettings.showLastName ? (
                <div className="input-field">
                  <input required
                    onChange={this.onChange}
                    value={this.state.lastname}
                    error={errors.lastname}
                    id="lastname"
                    type="text"
                    className={classnames("", {
                      invalid: errors.lastname
                    })}
                  />
                  <label htmlFor="lastname">Lastname</label>
                  <span className="red-text">{errors.name}</span>
                </div>     

              ) : null}
              <div className="input-field">
                <input required
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>

              <div className="input-field">
                <input required
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>

              <div className="input-field">
                <input required
                  onBlur={this.onBlurConfirmPassword}
                  onChange={this.onChange}
                  value={this.state.confirmPassword}
                  error={errors.confirmPassword}
                  id="confirmPassword"
                  type="password"
                  className={classnames("", {
                    invalid: errors.confirmPassword
                  })}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <span className="red-text">{errors.confirmPassword}</span>
              </div>

              <div className="SignUpBtn" >
                <button type="submit"  className="btn btn-large waves-effect waves-light hoverable blue accent-3" >
                  Sign up
                </button>
              </div>
            </form>
            <div className='separator-line'><span>or</span></div>
            {/* <div className='social-media-icon-container'>Social media icons</div>
            <p className='text-redirection-signup'> Already have an account?
              <Link to="/signup"> Signin</Link>
            </p> */}
              <div className="bottomSection">
              <ul className="social_list">
                  <li><a href="javascript:void(0)" className="Socialicon googleIcon"></a></li>
                  <li><a href="javascript:void(0)" className="Socialicon linkedinIcon"></a></li>
                  <li><a href="javascript:void(0)" className="Socialicon facebookIcon"></a></li>
                </ul>
              <p>Already have an account? <a href="javascript:void(0)" className="signUpText">Signin</a></p>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));
