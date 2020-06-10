import "./css/lighthouse.css";
import React from "react";
import lighthouseBody from "../../../../../assets/svg/lighthouse.svg";
import Windows from "./Windows";

const LightHouse = ({ section }) => {
  return (
    <div className="lighthouse-container">
      <div className={`light-pole ${section === 2 ? "glowing" : ""}`} />
      <Windows on={section === 1 ? false : true} />
      <img className="lighthouse-body" src={lighthouseBody} alt="" />
    </div>
  );
};

export default LightHouse;
