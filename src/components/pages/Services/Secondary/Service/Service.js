import "./css/service.css";
import React from "react";

const Service = ({
  iconOutline,
  iconColor,
  name,
  switchDescription,
  description
}) => {
  return (
    <div
      onMouseEnter={() => switchDescription(description)}
      onMouseLeave={() => switchDescription("")}
      className="service-container"
    >
      <div className="icon-container">
        <img className="icon-o" src={iconOutline} alt="" />
        <img className="icon-c" src={iconColor} alt="" />
        <div className="moon" />
        <div className="ground" />
      </div>
      <div className="service-name">{name}</div>
    </div>
  );
};

export default Service;
