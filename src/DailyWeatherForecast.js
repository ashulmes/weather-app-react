import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

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
        <WeatherIcon
          code={props.data.weather[0].icon}
          className="weather-icons"
        />
      </span>
      <div className="weather-forecast-temps">{temperature()}</div>
    </div>
  );
}
