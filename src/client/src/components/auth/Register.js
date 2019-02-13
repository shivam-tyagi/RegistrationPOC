import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import configData from '../../data/config';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname:"",
      dob:"",
      contact: "",
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
      lastname:this.state.lastname,
      dob:this.state.dob,
      contact: this.state.contact
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container"
      style={{
        backgroundColor: `${configData.bodyBackground}`,
      }}
      >
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form  onSubmit={this.onSubmit}>
              <div className="input-field col s12">
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
              <div className="input-field col s12">
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
              {configData.registrationSettings.showFirstName ? (
                <div className="input-field col s12">
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
                <div className="input-field col s12">
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
              {configData.registrationSettings.showDOB ? (
                <div className="input-field col s12">
                  <input required
                    onChange={this.onChange}
                    value={this.state.dob}
                    error={errors.dob}
                    id="dob"
                    type="date"
                    className={classnames("", {
                      invalid: errors.dob
                    })}
                  />
                  <label htmlFor="dob">DOB</label>
                  <span className="red-text">{errors.dob}</span>
                </div>
              ) : null}
              {configData.registrationSettings.showContact ? (
                <div className="input-field col s12">
                  <input required
                    onChange={this.onChange}
                    value={this.state.contact}
                    error={errors.contact}
                    id="contact"
                    type="text"
                    className={classnames("", {
                      invalid: errors.contact
                    })}
                  />
                  <label htmlFor="contact">Contact</label>
                  <span className="red-text">{errors.contact}</span>
                </div>
              ) : null}
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
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
)(withRouter(Register));
