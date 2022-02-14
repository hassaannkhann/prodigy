import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Jumbotron } from "react-bootstrap";
// import BizInstBG from "../../Assets/bizInsts.jpg"

export default class BizInstitute extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <HeaderTitle title="About Us" /> */}
        <div className="container-fluid p-0">
          <Jumbotron className="mb-0 vh-100 d-flex justify-content-center align-items-center bizInst-bg">
            <h1 style={{ zIndex: 2, color: '#fff' }}>Coming Soon</h1>
            <div id="overlay"></div> 
          </Jumbotron>
        </div>
        <Footer />
      </>
    );
  }
}
