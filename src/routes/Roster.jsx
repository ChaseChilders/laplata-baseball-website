import React from "react";
import players from "../components/Data";
import "./Roster.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../redux/actions";

function Roster() {
  const dispatch = useDispatch();
  const handleClick = (player) => {
    dispatch(addPlayer(player));
  };
  return (
    <div className="cardDiv">
      <div>
        <div className="table-title">ROSTER</div>
      </div>
      <div className="cardContainer">
        {players.map((player, i) => {
          return (
            <div className="card" key={i}>
              <img className="helmet" src="/pictures/helmet.png" alt="helmet"></img>
              <h1 className="playerNumber">{player.Number}</h1>
              <h1 className="playerName">
                {player.First} {player.Last}
              </h1>
              <button className="button" onClick={() => handleClick(player)}>
                ADD TO FAVORITES
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Roster;
