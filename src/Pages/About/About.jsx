import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";

const About = () => {
    return (
        <>
        <Header />
        <HeaderTitle title="About Us" />
        <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-12 description">
            <p>BizIntel was established in 2017 and is currently in a phase of rapid growth in IT consultancy and customized software development. BizIntel leverages its' intellectual resources & provides effective computing strategies and automating processes within public and private sectors of Pakistan . Our strong technical team have years of extensive experience working with large technology corporations during their careers. Over the years, BizIntel resources have successfully completed software projects with a number of renowned companies in the market.
</p>
            <p>BizIntel is a one-stop cost-effective software solutions and services provider for all kinds of businesses. Merging technology with business we help our client's businesses<br /> to:</p>
            <ul>
              <li>Enhance productivity</li>
              <li>Ease infrastructure maintenance</li>
              <li>Increase profitability and growth</li>
            </ul>
            
            <b className="color-text">Our strength is in our proven ability to execute large turnkey projects including customized software development and Business System Consultancy. We offer a tried, tested, proven and well-groomed team for customized software.</b><br /><br />
            <p>BizIntel collaborates with its clients to help them become high-performance corporate and governments entities. With deep industry roots and extensive business process expertise, access to broad resources and proven track record; we can mobilize the right people, skills, and technologies to effectively cater to a wide range of a client needs.</p>
          </div>
          <div className="ribbon-right col-lg-12">
            <div className="row">
              <div className="col-lg-4">
                <div className="body-r-space">
                  <h3>Mission</h3>
                </div>
              </div>
              <div className="col-lg-8">
                <p>We are skilled technologists that apply our passion for technology to create successful products and solution for client. Our passion drives us to be innovative, creative and expert. Our love of technology keep us learning, motivated and excited about what we do.
We empower our clients with technology.</p>
              </div>
            </div>
          </div>
          <div className="ribbon-right col-lg-12">
            <div className="row">
              <div className="col-lg-4">
                <div className="body-r-space">
                  <h3>Vision</h3>
                </div>
              </div>
              <div className="col-lg-8">
                <p>Our vision is to become a respected technology solution consultant company based on a strong team of passionate and expert technologies, and evidenced by a very large portfolio of successful projects and clients across the world.
We envision a company led by smart, self-motivated and multi-national people doing what they enjoy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
        </>
    )
}

export default About
