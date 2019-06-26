import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/actions";
import classnames from "classnames";
import {configData, login_carousel_images} from '../../data/config';
import ImageCarouselForLogin from '../imageCarouselLogin/ImageCarouselForLogin';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  closeBtnClickHandler = e => {
    console.log('close click handler', this.props);
    this.props.history.push("/");
  }

  render() {
    const { errors } = this.state;
    // console.log('this,--', login_carousel_images);

    return (
      <div className="container-fluid loginPage">
        <div className="row">
          <div className='signin-logo'>
             
          </div>
          <div className='login-close-btn' onClick={this.closeBtnClickHandler}></div>
          <ImageCarouselForLogin images = {login_carousel_images}></ImageCarouselForLogin>
          <div className="" id="loginTemplateContainer">
            {/* <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to home
            </Link> */}

            <div className="formWraper">
            <div className="">
              <h4>Sign in</h4>
              {/* <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p> */}
            </div>
            <form  onSubmit={this.onSubmit}>
              <div className="input-field">
                <input required
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                {/* <label htmlFor="email">Email</label> */}
                  <div className="LeftIcon emailIcon">
                  </div>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field">
                <input required
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                {/* <label htmlFor="password">Password</label> */}
                <div className="LeftIcon passwordIcon">
                  </div>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
                <div className="forgotBox">
                   <a href="javascript:void(0)">Forgot Password ?</a>
                </div>
              <div className="">
                <button
                 type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
            <div className='separator-line'>
                      <span>or</span></div>
            {/* <div className='social-media-icon-container'>Social media icons</div>
            <p className='text-redirection-signup'> Don't have an account?
              <Link to="/signup">Signup</Link>
            </p> */}


            <div className="bottomSection">
              <ul className="social_list">
                  <li><a href="javascript:void(0)" className="Socialicon googleIcon"></a></li>
                  <li><a href="javascript:void(0)" className="Socialicon linkedinIcon"></a></li>
                  <li><a href="javascript:void(0)" className="Socialicon facebookIcon"></a></li>
                </ul>
              <p>Don't have an account? <a href="javascript:void(0)" className="signUpText">Signup</a></p>
            </div>

           </div>

          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
