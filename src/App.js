import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";
import "./Footer.css";

function App() {
  return (
    <div className="container">
      <div className="app-contents">
        <Search />
        <Weather />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
