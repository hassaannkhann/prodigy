import React from "react";

const ServicesBody = (props) => {
  return (
    <div className={`col-lg-${props.colNum} col-${props.colNum} title-text`}>
      <img src={props.ImgUrl} width="60px" className="img-fluid" alt="img-in"  style={{marginBottom: "10px"}} />
      <p className="title-text">{props.serviceName}</p>
    </div>
  );
};

export default ServicesBody;
