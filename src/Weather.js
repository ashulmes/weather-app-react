import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInformation from "./WeatherInformation";
import Forecast from "./Forecast";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "19d385dc0dd1bf5546034b3a8b29d4b0";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-11 search-field">
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  autoFocus
                  placeholder="Enter a city..."
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-1 search-button">
                <button type="submit" className="btn btn-secondary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          <WeatherInformation data={weatherData} />
        </div>
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();

    return (
      <Loader
        type="TailSpin"
        color="#aebcdb"
        height={100}
        width={100}
        timeout={5000}
      />
    );
  }
}
