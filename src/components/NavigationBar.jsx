import React from "react";
import "./Stylesheets/Navigation.css";
import { Statistics } from "../routes/Statistics";
function NavigationBar() {
  return (
    <div>
      <div className="navigationContainer">
        <div className="logo">
          <img className="logoimage" src="/pictures/hustle2.png" alt="logo"></img>
        </div>
        <div>
          <img className="knightlogo" src="/pictures/knightlogo.png" alt="logo"></img>
        </div>
        <div className="links">
          <a href="/" className="link">
            HOME
          </a>
          <a href="/Roster" className="link">
            ROSTER
          </a>
          <a href="/Favorites" className="link">
            FAVORITES
          </a>
          <a href="/Schedule" className="link">
            SCHEDULE
          </a>
          <a href="/Statistics" className="link">
            STATISTICS
          </a>
        </div>
      </div>
      <div className="stateChampionships">
        <div className="stateChampionshipHeading">
          <h1>MARYLAND STATE CHAMPIONS </h1>
        </div>
        <div className="stateChampionshipYears">
          <h1> 2008, 2016, 2019, 2021</h1>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
