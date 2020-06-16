import "./css/ship.css";
import React, { useEffect, useState } from "react";
import shipBody from "../../../../../assets/svg/ship/ship.svg";
import Claw from "./Claw";
import Anca from "./Anca";

const Ship = ({ section, screenSize }) => {
  const [initialPosition, setInitialPosition] = useState(null);

  useEffect(() => {
    setInitialPosition("initial");
  }, []);

  return (
    <div
      className={`ship-container ${
        section === 1 || section === 3 ? initialPosition : "anchored"
      } ${screenSize}`}
    >
      <div className={`ship ${screenSize}`}>
        <Claw />
        <Anca />
        <img className="ship-body" src={shipBody} alt="" />
      </div>
    </div>
  );
};

export default Ship;
