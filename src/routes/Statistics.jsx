import React from "react";
import "./Statistics.css";
import players from "../components/Data";

export function Statistics() {
  return (
    <div className="table">
      <div className="table-title">2022 STATISTICS</div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">Number</th>
            <th className="text-left">Name</th>
            <th className="text-left">GP</th>
            <th className="text-left">AB</th>
            <th className="text-left">AVG</th>
            <th className="text-left">OBP</th>
            <th className="text-left">OPS</th>
            <th className="text-left">SLG</th>
            <th className="text-left">H</th>
            <th className="text-left">1B</th>
            <th className="text-left">2B</th>
            <th className="text-left">3B</th>
            <th className="text-left">HR</th>
            <th className="text-left">RBI</th>
            <th className="text-left">R</th>
            <th className="text-left">BB</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {players.map((player) => {
            return (
              <tr id="tr">
                <td id="statsTD" className="text-left">
                  #{player.Number}
                </td>
                <td id="statsTD" className="text-left">
                  {player.First} {player.Last}
                </td>
                <td id="statsTD" className="text-left">
                  {player.GP}
                </td>
                <td id="statsTD" className="text-left">
                  {player.AB}
                </td>
                <td id="statsTD" className="text-left">
                  {player.AVG}
                </td>
                <td id="statsTD" className="text-left">
                  {player.OBP}
                </td>
                <td id="statsTD" className="text-left">
                  {player.OPS}
                </td>
                <td id="statsTD" className="text-left">
                  {player.SLG}
                </td>
                <td id="statsTD" className="text-left">
                  {player.H}
                </td>
                <td id="statsTD" className="text-left">
                  {player["1B"]}
                </td>
                <td id="statsTD" className="text-left">
                  {player["2B"]}
                </td>
                <td id="statsTD" className="text-left">
                  {player["3B"]}
                </td>
                <td id="statsTD" className="text-left">
                  {player.HR}
                </td>
                <td id="statsTD" className="text-left">
                  {player.RBI}
                </td>
                <td id="statsTD" className="text-left">
                  {player.R}
                </td>
                <td id="statsTD" className="text-left">
                  {player.BB}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
