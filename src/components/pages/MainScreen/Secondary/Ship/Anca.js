import React from "react";
import anca from "../../../../../assets/svg/ship/anca.svg";
import chain from "../../../../../assets/svg/ship/chain.svg";

const Anca = () => {
  return (
    <div className="anca-container">
      <div className="chain-container">
        <img src={chain} className="chain" alt="" />
      </div>
      <img src={anca} className="anca" alt="" />
    </div>
  );
};

export default Anca;
