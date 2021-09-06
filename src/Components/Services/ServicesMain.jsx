import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SandD from "../Services/ServicesOffer/SandD";
import ECOMMERCE from "../../Assets/slider-ecom.png";
import POSECO from "../../Assets/slider-pos-eco.png";
import HRM from "../../Assets/slider-hrm.png";
import AutoMobile from "../../Assets/slider-automobile.png";
import MobileApp from "../../Assets/slider-mobile-app.png";
import SalesForce from "../../Assets/slider-salesforce2.png";
import Finance from "../../Assets/slider-finance.png";

export default class ServicesMain extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container" style={{marginBottom:"60px"}}>
        <h2 className="text-center heading"> Our Services</h2>
        <Slider {...settings}>
          <div>
            <SandD
              imgUrl={ECOMMERCE}
              Title="E-Comm"
              Text="Shopify | Magento | Woocommerece"
            />
          </div>
          <div>
            <SandD
              imgUrl={POSECO}
              Title="POS ECO"
              Text="Unlocks you sales potential with cloud tenants Next generation"
            />
          </div>
          <div>
            <SandD
              imgUrl={HRM}
              Title="HCM"
              Text="Providing HR Outsourcing and Management Consultancy services"
            />
          </div>
          <div>
            <SandD
              imgUrl={AutoMobile}
              Title="Automobile"
              Text="With transparency, quality and at an Impressive rate that will provide the best Service possible"
            />
          </div>
          <div>
            <SandD
              imgUrl={MobileApp}
              Title="Mobile App"
              Text="Creating high performance, Feature-packed Mobile applications for iOS & Android."
            />
          </div>
          <div>
            <SandD
              imgUrl={SalesForce}
              Title="Saleforce CommerceCloud"
              Text="Providing B2B and B2C ecommerce cloud Solutions to make your platform customer Successful."
            />
          </div>
          <div>
            <SandD
              imgUrl={Finance}
              Title="Finance"
              Text="Managing, investing, exchanging, or holding Money on behalf of clients."
            />
          </div>
        </Slider>
      </div>
    );
  }
}
