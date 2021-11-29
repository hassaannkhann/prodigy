import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Magento from "../../Assets/magento.svg"
import SalesForce from "../../Assets/Salesforce.png"
import MSDynamicsNew from "../../Assets/Dynamics365.webp"

export class OurPartners extends Component {
  render() {
    return (
      <Container className="mb-4 p-2">
        <h2 className="text-center heading">Our Partnerships</h2>
        <Row>
          <div className="feature col">
            <div class="feature-icon">
              <img src={Magento} alt="magento" style={{width: '178px'}}/>
            </div>
            <h4 className="text-center mt-4">Magento</h4>
          </div>
          <div className="feature col">
            <div class="feature-icon">
                <img src={SalesForce} alt="magento" />
            </div>
            <h4 className="text-center mt-4">SalesForce</h4>
          </div>
          <div className="feature col mb-2">
            <div class="feature-icon">
            <img src={MSDynamicsNew} alt="magento" style={{width: '211px'}}/>
            </div>
            <h4 className="text-center mt-4">Microsoft Dynamics</h4>
          </div>
        </Row>
      </Container>
    );
  }
}

export default OurPartners;
