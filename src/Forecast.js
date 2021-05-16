import React from "react";
import "./App.css";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast-tabs">
      <div className="row forecast-daily">
        <div className="col">
          <div className="forecast-day">Sat</div>
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="forecast-icons"
            alt="Cloud"
          />
          <div className="weather-forecast-temps">18°C</div>
        </div>
        <div className="col">
          <div className="forecast-day">Sun</div>
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="forecast-icons"
            alt="Cloud"
          />
          <div className="weather-forecast-temps">18°C</div>
        </div>
        <div className="col">
          <div className="forecast-day">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="forecast-icons"
            alt="Cloud"
          />
          <div className="weather-forecast-temps">18°C</div>
        </div>
        <div className="col">
          <div className="forecast-day">Tue</div>
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="forecast-icons"
            alt="Cloud"
          />
          <div className="weather-forecast-temps">18°C</div>
        </div>
        <div className="col">
          <div className="forecast-day">Wed</div>
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="forecast-icons"
            alt="Cloud"
          />
          <div className="weather-forecast-temps">18°C</div>
        </div>
      </div>
    </div>
  );
}
