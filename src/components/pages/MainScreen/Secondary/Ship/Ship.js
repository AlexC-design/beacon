import "./css/ship.css";
import React from "react";
import shipBody from "../../../../../assets/svg/ship/ship.svg";
import Claw from "./Claw";

const Ship = () => {
  return (
    <div className="ship-container">
      <div className="ship">
        <Claw />
        <img className="ship-body" src={shipBody} alt="" />
      </div>
    </div>
  );
};

export default Ship;
