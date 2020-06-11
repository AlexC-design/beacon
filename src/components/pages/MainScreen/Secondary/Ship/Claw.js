import React from "react";
import grip from "../../../../../assets/svg/ship/grip.svg";
import claw from "../../../../../assets/svg/ship/claw.svg";
import barrel from "../../../../../assets/svg/ship/barrel.svg";

const Claw = () => {
  return (
    <div className="claw-container">
      <img className="grip" src={grip} alt="" />
      <div className="claw-arm" />
      <img className="claw" src={claw} alt="" />
      <img className="barrel" src={barrel} alt="" />
    </div>
  );
};

export default Claw;
