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
            <p>FOURGEN Information Systems was established in 1998 and is currently in a phase of rapid growth in IT consultancy and customized software development. FOURGEN leverages its' intellectual resources &amp; provides effective computing strategies and automating processes within public and private sectors of Pakistan . Our strong technical team have years of extensive experience working with large technology corporations during their careers. Over the years, FOURGEN resources have successfully completed software projects with a number of renowned companies in the market.</p>
            <p>FOURGEN is a one-stop cost-effective software solutions and services provider for all kinds of businesses. Merging technology with business we help our client's businesses<br /> to:</p>
            <ul>
              <li>Enhance productivity</li>
              <li>Ease infrastructure maintenance</li>
              <li>Increase profitability and growth</li>
            </ul>
            <hr />
            <b className="color-text">Our strength is in our proven ability to execute large turnkey projects including customized software development and Business System Consultancy. We offer a tried, tested, proven and well-groomed team for customized software.</b><br /><br />
            <p>FOURGEN collaborates with its clients to help them become high-performance corporate and governments entities. With deep industry roots and extensive business process expertise, access to broad resources and proven track record; we can mobilize the right people, skills, and technologies to effectively cater to a wide range of a client needs.</p>
            <hr />
            <h3 className="heading">Mission</h3>
            <p>At FOURGEN, our goal is to achieve the unequivocal excellence in all aspects of the software industry by providing the most robust software solutions and technical innovations by its proactive and dynamic team meeting and exceeding the utmost level of desired customer satisfaction by enhancing their productivity and increasing their profitability.</p>
          </div>
        </div>
      </div>
        <Footer />
        </>
    )
}

export default About
