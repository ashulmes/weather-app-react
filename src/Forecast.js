import axios from "axios";
import React from "react";
import "./App.css";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "19d385dc0dd1bf5546034b3a8b29d4b0";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

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
