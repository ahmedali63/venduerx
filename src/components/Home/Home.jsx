import React, { Component } from "react";
import BiddersCards from "./biddersCards";
import FrontUi from "./frontUI";

import "./../../Stylesheets/Home/Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        Home
        <BiddersCards />
        <FrontUi />
      </div>
    );
  }
}

export default Home;
