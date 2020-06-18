import seaFreightO from "../../../../assets/icons/ship-o.svg";
import seaFreightC from "../../../../assets/icons/ship-c.svg";
import airFreightO from "../../../../assets/icons/plane-o.svg";
import airFreightC from "../../../../assets/icons/plane-c.svg";
import truckingO from "../../../../assets/icons/truck-o.svg";
import truckingC from "../../../../assets/icons/truck-c.svg";
import logisticsO from "../../../../assets/icons/forklift-o.svg";
import logisticsC from "../../../../assets/icons/forklift-c.svg";
import customsO from "../../../../assets/icons/customs-o.svg";
import customsC from "../../../../assets/icons/customs-c.svg";
import consultancyO from "../../../../assets/icons/graph-o.svg";
import consultancyC from "../../../../assets/icons/graph-c.svg";

export const servicesList = [
  {
    name: "Sea freight",
    iconO: seaFreightO,
    iconC: seaFreightC,
    description:
      "Shipping the capacity that is right for your business. You can count on our team to help book, process and manage the ideal schedule for your ocean freight."
  },
  {
    name: "Air freight",
    iconO: airFreightO,
    iconC: airFreightC,
    description:
      "Airfreight to all major airports in the World using airlines from any points in the UK to Worldwide destinations."
  },
  {
    name: "Trucking",
    iconO: truckingO,
    iconC: truckingC,
    description:
      "Freight over land using trucks of all sizes, keeping transit time and costs at its lowest."
  },
  {
    name: "Logistics",
    iconO: logisticsO,
    iconC: logisticsC,
    description:
      "We can handle the whole movement, from customs declarations to ground deliveries, controlling the entire process through our streamlined visibility systems."
  },
  {
    name: "Customs",
    iconO: customsO,
    iconC: customsC,
    description:
      "We are here to facilitate export and import declarations to ensure freight is not held up unnecessarily by government agencies."
  },
  {
    name: "Consultancy",
    iconO: consultancyO,
    iconC: consultancyC,
    description:
      "Our network of supply chain consultants focuses on analysis and process development to reduce total operating cost and increase service standards."
  }
];
