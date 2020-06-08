import React from "react";
import anca from "../../../assets/icons/anca.svg";
import "./css/main-button.css";

const MainButton = ({ text, icon = true, setSection, section }) => {
  return (
    <button
      onClick={() => setSection(section === 1 ? 2 : 1)}
      className={`main-button ${icon && "with-icon"}`}
    >
      <div className="text">Learn More</div>
      {icon && <img className="icon" src={anca} />}
    </button>
  );
};

export default MainButton;
