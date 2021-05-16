import React from "react";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Manchester",
    date: "24 Apr, 19:55",
    description: "Clear Sky",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: 18,
    feelsLike: 12,
    wind: 7,
    humidity: 14,
  };

  return (
    <div>
      <h1>{weatherData.city}</h1>
      <p>Updated: {weatherData.date}</p>
      <img
        src={weatherData.icon}
        className="weather-icon"
        alt={weatherData.description}
      />
      <span className="temperature-value">{weatherData.temperature}</span>
      <span className="temperature-metric">°C</span>
      <p className="weather-description">{weatherData.description}</p>

      <section className="weather-info">
        <div className="row justify-content-center headings">
          <div className="col-3">Feels Like</div>
          <div className="col-3">Wind</div>
          <div className="col-3">Humidity</div>
        </div>

        <div className="row justify-content-center">
          <div className="col-3">{weatherData.feelsLike}°C</div>
          <div className="col-3">{weatherData.wind} MPH</div>
          <div className="col-3">{weatherData.humidity}%</div>
        </div>
      </section>
    </div>
  );
}
