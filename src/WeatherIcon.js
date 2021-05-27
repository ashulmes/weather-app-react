import React from "react";

export default function WeatherIcon(props) {
  let icon = `http://openweathermap.org/img/wn/${props.code}@2x.png`;
  let description = props.alt;
  let height = props.height;

  return <img src={icon} alt={description} height={height} />;
}
