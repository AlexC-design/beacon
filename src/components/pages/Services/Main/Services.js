import "./css/services.css";
import React, { useState } from "react";
import Service from "../Secondary/Service/Service";
import { servicesList } from "./servicesList";

const Services = ({ section }) => {
  const [description, setDescription] = useState(
    "Shipping the capacity that is right for your business. You can count on our team to help book, process and manage the ideal schedule for your ocean freight."
  );
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
        {servicesList.map(service => (
          <Service
            switchDescription={switchDescription}
            description={service.description}
            iconOutline={service.iconO}
            iconColor={service.iconC}
            name={service.name}
          />
        ))}
        <div className="offset" />
      </div>
    </div>
  );
};

export default Services;
