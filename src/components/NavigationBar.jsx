import React from "react";
import "./Stylesheets/Navigation.css";

function NavigationBar() {
  return (
    <div>
      <div className="navigationContainer">
        <div className="logo">
          <h1 className="logoLaplata">LA PLATA HIGH SCHOOL BASEBALL</h1>
        </div>
        <div className="links">
          <a href="#roster" className="link">
            ROSTER
          </a>
          <a href="#schedule" className="link">
            SCHEDULE
          </a>
          <a href="#statistics" className="link">
            STATISTICS
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
