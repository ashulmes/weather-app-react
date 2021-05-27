import React from "react";
import ForecastIcons from "./ForecastIcons";

export default function DailyWeatherForecast(props) {
  function temperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <span className="forecast-icons">
        <ForecastIcons code={props.data.weather[0].icon} />
      </span>
      <div className="weather-forecast-temps">{temperature()}</div>
    </div>
  );
}
