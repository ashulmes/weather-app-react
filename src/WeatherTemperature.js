import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature-value">{Math.round(props.celsius)}</span>
        <span className="temperature-metric">
          °C{" "}
          <a href="/" onClick={showFahrenheit} className="metric-links">
            | °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature-value">{Math.round(fahrenheit)}</span>
        <span className="temperature-metric">
          <a href="/" onClick={showCelsius} className="metric-links">
            °C |
          </a>{" "}
          °F
        </span>
      </span>
    );
  }
}
