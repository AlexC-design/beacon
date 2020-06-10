import "./css/ship.css";
import React from "react";
import shipBody from "../../../../../assets/svg/ship/ship.svg";

const Ship = () => {
  return (
    <div className="ship-container">
      <div className="ship">
        <img className="ship-body" src={shipBody} alt="" />
      </div>
    </div>
  );
};

export default Ship;
