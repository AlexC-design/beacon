import "./css/main-screen.css";
import React from "react";
import MainButton from "../../../shared/MainButton/MainButton";
import WaterLine from "../Secondary/WaterLine/WaterLine";
import Ship from "../Secondary/Ship/Ship";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="clouds" />
      <div className="water">
        <div className="water-top">
          <WaterLine />
        </div>
        <Ship />
      </div>
      <div className="bottom-section">
        <MainButton />
      </div>
    </div>
  );
};

export default MainScreen;
