import React, { Component } from "react";
import { Link } from "react-router-dom";
import configData from "../../data/config";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh", backgroundColor: `${configData.landingPageBg}`, }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h3>This is a home page</h3>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
