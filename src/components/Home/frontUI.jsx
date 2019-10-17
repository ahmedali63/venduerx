import React, { Component } from "react";
import "./../../Stylesheets/Home/frontUI.css";
import map from "../../images/map.png";
class FrontUi extends Component {
  state = {};
  render() {
    return (
      <div id="main-div">
        <div className="main-div">
          <div className="top-div">
            <div className="map-div">
              <img src={map} alt="map" />
            </div>
            <div className="pink-divs"></div>
            <div className="pink1"></div>
            <div className="pink2"></div>
            <div className="pink3"></div>
            <div className="pink4">
              <h1>Your Prescription.</h1>
              <h1>Your terms.</h1>
              <p>
                Name your price and let pharmacies bid to earn your business on
                our transparent blockchain platform
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontUi;
