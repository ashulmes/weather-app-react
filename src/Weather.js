import React from "react";
import axios from "axios";

export default function Weather() {
  function showTemperature(response) {
    alert(`The temperature in Manchester is ${response.data.main.temp}°C`);
  }

  let apiKey = "4a150b550611ee8a27e04e337620852b";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);

  return <h2>Hello from Weather!</h2>;
}
