import React from "react";
import FormattedDate from "./FormattedDate";
import "./App.css";
import "./Weather.css";

export default function WeatherInformation(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <p>
        Updated: <FormattedDate date={props.data.date} />
      </p>
      <img
        src={props.data.icon}
        alt={props.data.description}
        className="weather-icon"
      />
      <span className="temperature-value">
        {Math.round(props.data.temperature)}
      </span>
      <span className="temperature-metric">°C</span>
      <p className="weather-description">{props.data.description}</p>

      <section className="weather-info">
        <div className="row justify-content-center headings">
          <div className="col-3">Feels Like</div>
          <div className="col-3">Wind</div>
          <div className="col-3">Humidity</div>
        </div>

        <div className="row justify-content-center">
          <div className="col-3">{Math.round(props.data.feelsLike)}°C</div>
          <div className="col-3">{Math.round(props.data.wind)} MPH</div>
          <div className="col-3">{props.data.humidity}%</div>
        </div>
      </section>
    </div>
  );
}
