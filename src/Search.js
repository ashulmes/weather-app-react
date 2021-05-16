import React from "react";
import "./App.css";
import "./Search.css";

export default function Search() {
  return (
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
  );
}
