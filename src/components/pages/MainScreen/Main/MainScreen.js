import "./css/main-screen.css";
import React from "react";
import MainButton from "../../../shared/MainButton/MainButton";
import WaterLine from "../Secondary/WaterLine/WaterLine";
import Ship from "../Secondary/Ship/Ship";
import cloudsLarge1 from "../../../../assets/svg/clouds/clouds-large-1.svg";
import cloudsLarge2 from "../../../../assets/svg/clouds/clouds-large-2.svg";
import LightHouse from "../Secondary/LIghtHouse/LightHouse";

const MainScreen = ({ section, setSection }) => {
  const waterLines = new Array(Math.floor(window.innerWidth / 130)).fill("");

  return (
    <div className="main-screen">
      <div className="clouds">
        <img
          className={`cloud clouds-large-1 ${section === 1 ? "light" : "dark"}`}
          src={cloudsLarge1}
        />
        <img
          className={`cloud clouds-large-2 ${section === 1 ? "light" : "dark"}`}
          src={cloudsLarge2}
        />
      </div>
      <div className="water">
        <div className="water-top">
          <div className="water-lines">
            {waterLines.map((line, index) => (
              <WaterLine key={`a-${index}-b`} index={index} />
            ))}
          </div>
        </div>
        <Ship />
        <LightHouse section={section} />
      </div>
      <div className="bottom-section">
        <MainButton
          icon={section === 2 ? true : false}
          setSection={setSection}
          section={section}
        />
      </div>
    </div>
  );
};

export default MainScreen;
