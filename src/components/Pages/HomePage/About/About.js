import React from "react";

import enjoyableDesktop from "../../../../images/homepage/enjoyable-place-desktop.jpg";
import locallySourced from "../../../../images/homepage/locally-sourced-desktop.jpg";
import DescriptionCard from "../../../DescriptionCard/DescriptionCard.js";
import Hamburger from "../../../Hamburger/Hamburger.js";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <div className="rectangle rectangle--right-curved About__rectangle-right"></div>
      <img
        src={enjoyableDesktop}
        alt="Hilly farm with grazing animals"
        className="About__image About__image--farm"
      />
      <DescriptionCard
        heading="Enjoyable place for all the family"
        bodyText="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
        className="About__description-card-enjoyable"
        color="var(--primary-color)"
      />
      <DescriptionCard
        heading="The most locally sourced food"
        bodyText="All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest,most sustainable food."
        className="About__description-card-local"
        color="var(--primary-color)"
      />
      <img
        src={locallySourced}
        alt="A chef adding the finishing touches to a dish"
        className="About__image About__image--chef"
      />
      <Hamburger
        number={6}
        width="16rem"
        height="6px"
        className="About__hamburger"
      />
      <div className="rectangle rectangle--left-curved About__rectangle-left"></div>
    </div>
  );
};

export default About;