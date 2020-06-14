import "./css/main-screen.css";
import React from "react";
import MainButton from "../../../shared/MainButton/MainButton";
import WaterLine from "../Secondary/WaterLine/WaterLine";
import Ship from "../Secondary/Ship/Ship";
import cloudsLarge1 from "../../../../assets/svg/clouds/clouds-large-1.svg";
import cloudsLarge2 from "../../../../assets/svg/clouds/clouds-large-2.svg";
import LightHouse from "../Secondary/LightHouse/LightHouse.js";

const MainScreen = ({ section, setSection }) => {
  const waterLines = new Array(Math.floor(window.innerWidth / 130)).fill("");
  const screenSize =
    window.innerWidth < 1350
      ? window.innerWidth > 850
        ? "medium"
        : window.innerWidth > 450
        ? "small"
        : "smallest"
      : "large";

  return (
    <div className="main-screen">
      <div className="title-container">
        <div className="title">Beacon</div>
        <div className="tagline">Logistics at large</div>
      </div>
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
          {window.innerHeight > 560 && (
            <div className="water-lines">
              {waterLines.map((line, index) => (
                <WaterLine key={`a-${index}-b`} index={index} />
              ))}
            </div>
          )}
        </div>
        <Ship section={section} screenSize={screenSize} />
        <LightHouse section={section} screenSize={screenSize} />
      </div>
      <div className={`bottom-section section-${section}`}>
        <div className="bottom-paragraph">
          <p>
            Providing complete supply chain solutions so that you don't have to
            deal with multiple suppliers to achieve your goals.
          </p>
          {window.innerWidth > 1366 && (
            <p>
              Whether you’re after contract logistics or looking for one off
              ad-hoc freight services, our flexibility is always to your
              benefit.
            </p>
          )}
          <p>
            Contact us to see how our services can help your business grow. Let
            us be your guiding beacon
          </p>
        </div>
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
