import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import { Container, Row } from "react-bootstrap";
import BakerTilly from "../../Assets/bakertillypk.jpg";
import BeInc from "../../Assets/BeInc.png";
import ERC from "../../Assets/ERC.png";
import HEPL from "../../Assets/HEPL.png";
import OX from "../../Assets/OX.png";
import Rehmani_Farms from "../../Assets/Rehmani_Farms.png";
import Mola_Logo from "../../Assets/Editable-File-Mola-Logo.png";
import hipressureparts from "../../Assets/hipressureparts-com-ecom..jpg";
import MaccaLogo from "../../Assets/MaccaLogo.png";
import openventpk from "../../Assets/openventpk-logo.png";
import RehmaniProperty from "../../Assets/RehmaniProperty.png";
import TREC from "../../Assets/TREC.png";

const Clients = () => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '20px',
  };

  return (
    <>
      <Header />
      <HeaderTitle title="Our Clients" />
      <Container>
        <Row>
          <div class="col-lg-12 title-text">
            <h2 style={{ paddingTop: "20px" }}>Brands</h2>
            <hr class="hr-orange" style={{ border: "1px solid orange" }} />
          </div>
        </Row>
        <Row className="box1-img">
          <div class="col-lg-2" style={divStyle}>
            <img src={MaccaLogo} class="img-fluid" />
          </div>
          <div class="col-lg-2" style={divStyle}>
            <img src={BeInc} class="img-fluid" />
          </div>
          <div class="col-lg-2" style={divStyle}>
            <img src={ERC} class="img-fluid" />
          </div>

          <div class="col-lg-2" style={divStyle}>
            <img src={HEPL} class="img-fluid" />
          </div>

          <div class="col-lg-2" style={divStyle}>
            <img src={OX} class="img-fluid" />
          </div>

          <div class="col-lg-2" style={divStyle}>
            <img src={Rehmani_Farms} class="img-fluid" />
          </div>
        </Row>
        <Row className="box1-img">
          <div class="col-lg-2" style={divStyle}>
            <img src={Mola_Logo} class="img-fluid" />
          </div>
          <div class="col-lg-2" style={divStyle}>
            <img src={hipressureparts} class="img-fluid" />
          </div>
          <div class="col-lg-2" style={divStyle}>
            <img src={BakerTilly} class="img-fluid" />
          </div>

          <div class="col-lg-2" style={divStyle}>
            <img src={openventpk} class="img-fluid" />
          </div>

          <div class="col-lg-2" style={divStyle}>
            <img src={RehmaniProperty} class="img-fluid" />
          </div>

          <div class="col-lg-2" style={divStyle}>
            <img src={TREC} class="img-fluid" />
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Clients;
