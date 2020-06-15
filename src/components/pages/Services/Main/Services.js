import "./css/services.css";
import React, { useState } from "react";
import Service from "../Secondary/Service/Service";
import forkLiftOutline from "../../../../assets/icons/forklift-o.svg";
import forkLiftColor from "../../../../assets/icons/forklift-c.svg";

const Services = ({ section }) => {
  const [description, setDescription] = useState("");
  const [fade, setFade] = useState("in");

  const switchDescription = newDescription => {
    newDescription === "" ? setFade("out") : setFade("in");

    setDescription(newDescription);
  };

  return (
    <div className={`services-page section-${section}`}>
      <div className="navbar" />
      <div className="title">Services</div>
      <div className={`description fade-${fade}`}>{description}</div>
      <div className="services-container">
        <Service
          switchDescription={switchDescription}
          description="test description"
          iconOutline={forkLiftOutline}
          iconColor={forkLiftColor}
          name="Service Name"
        />
        <Service
          switchDescription={switchDescription}
          description="test description"
          iconOutline={forkLiftOutline}
          iconColor={forkLiftColor}
          name="Service Name"
        />
        <Service
          switchDescription={switchDescription}
          description="test description"
          iconOutline={forkLiftOutline}
          iconColor={forkLiftColor}
          name="Service Name"
        />
        <Service
          switchDescription={switchDescription}
          description="test description"
          iconOutline={forkLiftOutline}
          iconColor={forkLiftColor}
          name="Service Name"
        />
        <Service
          switchDescription={switchDescription}
          description="test description"
          iconOutline={forkLiftOutline}
          iconColor={forkLiftColor}
          name="Service Name"
        />
        <Service
          switchDescription={switchDescription}
          description="test description"
          iconOutline={forkLiftOutline}
          iconColor={forkLiftColor}
          name="Service Name"
        />
      </div>
    </div>
  );
};

export default Services;
