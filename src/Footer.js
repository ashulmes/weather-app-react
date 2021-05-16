import React from "react";
import "./App.css";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      This app was coded by Alex Sumner-Hulmes. It is{" "}
      <a
        href="https://github.com/ashulmes/weather-app-react"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
        hosted on Netlify
      </a>
      .
    </div>
  );
}
