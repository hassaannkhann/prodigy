import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import { Container, Row } from "react-bootstrap";
import "../../Components/includes/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../../Components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <HeaderTitle title="Contact Us" />
      <Container className="content">
        <Row>
          <div className="col-lg-6">
            <ContactForm title="Contact Us Here" />
          </div>
          <div className="col-lg-6 mt-5">
            <h2>How to reach us</h2>
            <h3 class="text-color no-margins">Office</h3>
            <hr class="space s"></hr>
            <p>
              2nd Floor Mehdi Tower
              <br></br>
              SMCHS Block A Sindhi Muslim CHS (SMCHS), <br></br>
              Karachi-75300, Pakistan.
            </p>
            <ul class="fa-ul inline">
              <li>
                <FontAwesomeIcon icon={faPhone} rotation={90} color="#c6ce3a" />{" "}
                +92-213-4322238-39
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} color="#c6ce3a" />
                <a href="mailto:info@bizintel.co"> info@bizintel.co</a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
      <div className="container-fluid p-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1065348202224!2d67.05413941441071!3d24.86021075139144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e849a7255ab%3A0x11cd094961dbc6a9!2sMehdi%20Tower!5e0!3m2!1sen!2s!4v1623735351568!5m2!1sen!2s"  height={450} style={{border:0, width:"100%"}}></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
