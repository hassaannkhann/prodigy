import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Jumbotron } from "react-bootstrap";

export default class BizInstitute extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <HeaderTitle title="About Us" /> */}
        <div className="container-fluid p-0">
          <Jumbotron className="mb-0 vh-100 d-flex justify-content-center align-items-center">
            <h1>Coming Soon</h1>
          </Jumbotron>
        </div>
        <Footer />
      </>
    );
  }
}
