import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import SliderImg1 from "../../Assets/1.jpg";
import SliderImg2 from "../../Assets/2.jpg";
import SliderImg3 from "../../Assets/3.jpg";


const Slider = () => {
  // const elements = { Slide1: SliderImg1, Slide2: SliderImg2, Slide3: SliderImg3 };
  return (
    <div className="container-fluid p-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImg1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImg2}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImg3}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
