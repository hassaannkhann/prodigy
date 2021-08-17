import React from "react";
import ServicesSubHeader from "../../Components/ServicesPageComponents/ServicesSubHeader";
import BannerImg from "../../Assets/pos-eco-banner.jpg";
import BannerHeading from "../../Assets/pos-select-heading.png";
import "../../Components/includes/style.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ServicesBody from "../../Components/ServicesPageComponents/ServicesBody";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import sales from "../../Assets/sales.png";
import items from "../../Assets/items.png";
import pricing from "../../Assets/price-tag.png";
import discount from "../../Assets/discount.png";
import payment from "../../Assets/payment.png";
import integration from "../../Assets/integration.png";
import reporting from "../../Assets/reporting.png";
import schemes from "../../Assets/schemes.png";
import loyalty from "../../Assets/loyalty.png";
import computer from "../../Assets/computer.png";
import workflow from "../../Assets/workflow.png";
import ecommerceportal from "../../Assets/ecommerceportal.png";
import alerts from "../../Assets/alerts.png";
import customermanagement from "../../Assets/customermanagement.png";
import schemesEngine  from "../../Assets/schemesEngine.png";
import giftcard from "../../Assets/gift-card.png";
import stockaudit from "../../Assets/stock-audit.png";
import priceChecker from "../../Assets/priceChecker.png";

const POSeco = () => {
  const objectsLeft = [
    {
      title: "Sales",
      image: sales,
    },
    {
      title: "Items",
      image: items,
    },
    {
      title: "Pricing",
      image: pricing,
    },
    {
      title: "Discount",
      image: discount,
    },
    {
      title: " Multiple Payment Modes",
      image: payment,
    },
    {
      title: " Modern Devices Integration",
      image: integration,
    },
    {
      title: "Basic Reporting",
      image: reporting,
    },
    {
      title: "Schemes",
      image: schemes,
    },
  ];
  const objectsRight = [
    {
      title: "Comprehensive Loyalty Module",
      image: loyalty,
    },
    {
      title: "Offline Tills",
      image: computer,
    },
    {
      title: "Work Flows",
      image: workflow,
    },
    {
      title: "E-Commerce Portal",
      image: ecommerceportal,
    },
    {
      title: "Alerts",
      image: alerts,
    },
    {
      title: " Customer Management ",
      image: customermanagement,
    },
    {
      title: "Schemes Engine",
      image: schemesEngine,
    },
    {
      title: "Gift Card/Bank Voucher",
      image: giftcard,
    },
    {
      title: "HHT Stock Audit",
      image: stockaudit,
    },
    {
      title: "Price Checker",
      image: priceChecker,
    },
  ];
  return (
    <>
      <Header />
      <div className="container-fluid services-container p-0">
        <div
          className="slider"
          style={{ background: "url(" + BannerImg + ")" }}
        >
          <ServicesSubHeader ServiceImg={BannerHeading} />
        </div>
        <Container>
          <Row>
            <div className="col-lg-4">
              <h2>Basic Features</h2>
              <hr className="hr-orange" />
              <Row className="images">
                {objectsLeft.map(function (key, value) {
                  return (
                    <ServicesBody ImgUrl={key.image} serviceName={key.title} colNum={3} />
                  );
                })}
              </Row>
            </div>
            <div className="col-lg-8">
              <h2>Add-On Modules</h2>
              <hr class="hr-orange" />
              <Row className="images">
                {objectsRight.map(function (key, value) {
                  return (
                    <ServicesBody ImgUrl={key.image} serviceName={key.title} colNum={3} />
                  );
                })}
              </Row>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default POSeco;
