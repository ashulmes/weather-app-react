import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";
import "./Footer.css";

export default function App() {
  return (
    <div className="container">
      <div className="app-contents">
        <Weather defaultCity="Manchester" />
      </div>
      <Footer />
    </div>
  );
}
