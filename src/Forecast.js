import axios from "axios";
import React, { useState } from "react";
import DailyWeatherForecast from "./DailyWeatherForecast";
import "./App.css";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast-tabs">
        <div className="row forecast-daily">
          <div className="col">
            <DailyWeatherForecast data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "19d385dc0dd1bf5546034b3a8b29d4b0";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
