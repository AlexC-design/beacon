import "./css/services.css";
import React from "react";

const Services = ({ section }) => {
  return (
    <div className={`services-page section-${section}`}>
      <div className="navbar" />
      <div className="title">Services</div>
    </div>
  );
};

export default Services;
