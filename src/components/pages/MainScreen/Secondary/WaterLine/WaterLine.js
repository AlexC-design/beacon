import "./css/water-line.css";
import React from "react";

const WaterLine = ({ index }) => {
  return (
    <div
      className="water-line"
      style={{
        //setting random heights
        marginTop: `${Math.random() * (window.innerHeight > 840 ? 30 : 15)}px`,
        //hide some of the line groups
        opacity: `${Math.random() * 3 < 2 ? 1 : 0}`
      }}
    >
      <div
        className="line one"
        style={{
          animation: `wiggle-${index} ${
            Math.random() * 5 + 5
          }s ease-in-out infinite`,
          width: `${Math.random() * 50 + 150}px`
        }}
      />
      <div
        className="line two"
        style={{
          animation: `wiggle-${index} ${
            Math.random() * 5 + 5
          }s ease-in-out infinite`,
          //hide some of the small lines
          width: `${Math.random() < 0.5 ? Math.random() * 50 + 50 : 0}px`
        }}
      />
    </div>
  );
};

export default WaterLine;
