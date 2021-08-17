import React from "react";

const ServicesSubHeader = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 slider">
            <img src={props.ServiceImg} className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSubHeader;
