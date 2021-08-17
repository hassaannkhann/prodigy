import React from "react";
import ServicesSubHeader from "../../Components/ServicesPageComponents/ServicesSubHeader";
import BannerImg from "../../Assets/hcm-new.jpg";
import BannerHeading from "../../Assets/pos-select-heading.png";
import "../../Components/includes/style.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ServicesBody from "../../Components/ServicesPageComponents/ServicesBody";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import EmployeeInfo from "../../Assets/employeeInfo.png";
import Salary from "../../Assets/salary.png";
import LeavesInfo from "../../Assets/calendar.png";
import AttendanceReview from "../../Assets/attendanceR.png";
import AttendanceAdjustments from "../../Assets/slider.png";
import PFLedger from "../../Assets/fundraiser.svg";
import Recruitment from "../../Assets/headhunting.png";
import fund from "../../Assets/fund.png";
import loan from "../../Assets/loan.png";
import defination from "../../Assets/defination.png";
import apraisel from "../../Assets/apraisel.png";
import tax from "../../Assets/tax.png";
import separation from "../../Assets/separation.png";
import settle from "../../Assets/settle.png";

const HCM = () => {
  const objectsLeft = [
    {
      title: "Employee Information",
      image: EmployeeInfo,
    },
    {
      title: "Monthwise Salary Summary",
      image: Salary,
    },
    {
      title: "Leaves info",
      image: LeavesInfo,
    },
    {
      title: "Attendance Review",
      image: AttendanceReview,
    },
    {
      title: "Attendance Adjustments",
      image: AttendanceAdjustments,
      
    },
    {
      title: "PF Ledger",
      image: PFLedger,
    },
  ];
  const objectsRight = [
    {
      title: "Recruitment",
      image: Recruitment,
    },
    {
      title: "Employee Information",
      image: EmployeeInfo,
    },
    {
      title: "Leaves Management",
      image: LeavesInfo,
    },
    {
      title: "Provident Fund",
      image: fund,
    },
    {
      title: "Loan & Advances",
      image: loan,
      
    },
    {
      title: "Salary Definition",
      image: defination,
    },
    {
      title: "Appraisal",
      image: apraisel,
    },
    {
      title: "Income Tax",
      image: tax,
    },
    {
      title: "Separation",
      image: separation,
    },
    {
      title: "Full & Final Settlement",
      image: settle,
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
            <div className="col-lg-5">
              <h2>Employees App Features</h2>
              <hr className="hr-orange" />
              <Row className="images">
                {objectsLeft.map(function (key, value) {
                  return (
                    <ServicesBody
                      colNum={4}
                      ImgUrl={key.image}
                      serviceName={key.title}
                    />
                  );
                })}
              </Row>
            </div>
            <div className="col-lg-7">
            <h2>HR Back-office Portal Features</h2>
            <hr class="hr-orange"/>
            <Row className="images">
                {objectsRight.map(function (key, value) {
                  return (
                    <ServicesBody
                      colNum={4}
                      ImgUrl={key.image}
                      serviceName={key.title}
                    />
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

export default HCM;
