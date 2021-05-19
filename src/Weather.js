import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import FormattedDate from "./FormattedDate";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.loaded) {
    return (
      <div>
        <div className="search-form">
          <form>
            <div className="row">
              <div className="col-10 search-field">
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  autoFocus
                  placeholder="Enter a city..."
                />
              </div>
              <div className="col-1 search-button">
                <button type="submit" className="btn btn-secondary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div class="col-1 locate-button">
                <button type="button" className="btn btn-secondary">
                  <i className="fas fa-location-arrow"></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <h1>{weatherData.city}</h1>
          <p>
            Updated: <FormattedDate date={weatherData.date} />
          </p>
          <img
            src={weatherData.icon}
            className="weather-icon"
            alt={weatherData.description}
          />
          <span className="temperature-value">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="temperature-metric">°C</span>
          <p className="weather-description">{weatherData.description}</p>

          <section className="weather-info">
            <div className="row justify-content-center headings">
              <div className="col-3">Feels Like</div>
              <div className="col-3">Wind</div>
              <div className="col-3">Humidity</div>
            </div>

            <div className="row justify-content-center">
              <div className="col-3">{Math.round(weatherData.feelsLike)}°C</div>
              <div className="col-3">{Math.round(weatherData.wind)} MPH</div>
              <div className="col-3">{weatherData.humidity}%</div>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    const apiKey = "19d385dc0dd1bf5546034b3a8b29d4b0";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <Loader
        type="TailSpin"
        color="#aebcdb"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
