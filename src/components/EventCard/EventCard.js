import React, { useState } from "react";

import "./EventCard.scss";

const EventCard = ({ image, heading, bodyText, onOptionClick, selected }) => {
  const renderListClass = () => {
    if (selected === "Family Gatherings") {
      return "EventCard__list-item--selected";
    } else {
      return null;
    }
  };
  return (
    <div className="EventCard">
      <img src={image} alt={heading} className="EventCard__image" />
      <h2 className="secondary-heading EventCard__heading">{heading}</h2>
      <div className="body-text-1 EventCard__description">{bodyText}</div>
      <button className="button button--dark EventCard__button">
        Book a table
      </button>

      <ul className="EventCard__list">
        <li
          className={`EventCard__list-item ${renderListClass()}`}
          onClick={() => {
            onOptionClick("Family Gatherings");
          }}
        >
          <h3 className="tertiary-heading-small">Family Gatherings</h3>
        </li>
        <li
          className={`EventCard__list-item ${renderListClass()}`}
          onClick={() => {
            onOptionClick("Special Events");
          }}
        >
          <h3 className="tertiary-heading-small">Special Events</h3>
        </li>
        <li
          className={`EventCard__list-item ${renderListClass()}`}
          onClick={() => {
            onOptionClick("Social Events");
          }}
        >
          <h3 className="tertiary-heading-small">Social Events</h3>
        </li>
      </ul>
    </div>
  );
};

export default EventCard;
