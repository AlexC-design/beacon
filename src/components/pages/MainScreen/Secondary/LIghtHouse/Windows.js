import "./css/lighthouse.css";
import React from "react";
import beaconLightLeft from "../../../../../assets/svg/beacon-light-left.svg";
import beaconLightRight from "../../../../../assets/svg/beacon-light-right.svg";
import beaconGlow from "../../../../../assets/svg/beacon-glow.svg";

const Windows = ({ on }) => {
  return (
    <div className="windows-container">
      {on && <img className="beacon-glow" src={beaconGlow} />}
      {on && <img className="beacon-light left" src={beaconLightLeft} />}
      {on && <img className="beacon-light right" src={beaconLightRight} />}
      <div className="window first" />
      <div className="window second" />
      <div className="window third" />
      <div className="window fourth" />
    </div>
  );
};

export default Windows;
