import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SandD from "../Services/ServicesOffer/SandD";
import CardImg1 from "../../Assets/pos-select.jpg";

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
              imgUrl={CardImg1}
              Title="E-Comm"
              Text="Shopify | Magento | Woocommerece"
            />
          </div>
          <div>
            <SandD
              imgUrl={CardImg1}
              Title="POS ECO"
              Text="Unlock your Sales Potential with Cloud Tenants' Next Generation... "
            />
          </div>
          <div>
            <SandD
              imgUrl={CardImg1}
              Title="HCM"
              Text="Unlock your Sales Potential with Cloud Tenants' Next Generation... "
            />
          </div>
          <div>
            <SandD
              imgUrl={CardImg1}
              Title="Automobile"
              Text="Unlock your Sales Potential with Cloud Tenants' Next Generation... "
            />
          </div>
          <div>
            <SandD
              imgUrl={CardImg1}
              Title="Mobile App"
              Text="Unlock your Sales Potential with Cloud Tenants' Next Generation... "
            />
          </div>
          <div>
            <SandD
              imgUrl={CardImg1}
              Title="Saleforce CommerceCloud"
              Text="Unlock your Sales Potential with Cloud Tenants' Next Generation... "
            />
          </div>
          <div>
            <SandD
              imgUrl={CardImg1}
              Title="Finance"
              Text="Unlock your Sales Potential with Cloud Tenants' Next Generation... "
            />
          </div>
        </Slider>
      </div>
    );
  }
}
