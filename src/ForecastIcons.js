import React from "react";

export default function ForecastIcons(props) {
  let icon = `http://openweathermap.org/img/wn/${props.code}@2x.png`;

  return <img src={icon} className="forecast-icons" />;
}
