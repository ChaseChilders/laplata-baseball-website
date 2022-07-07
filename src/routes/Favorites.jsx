import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "react-modal";
import "./Favorites.css";

function Favorites() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const players = useSelector((state) => state.add.favoritePlayers);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [clickedPlayer, setClickedPlayer] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }
  function handleClick(player) {
    setClickedPlayer(player);
    setIsOpen(true);
  }
  return (
    <div className="cardDiv">
      <div>
        <div>
          <div className="table-title">FAVORITES</div>
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
                  VIEW STATISTICS
                </button>
              </div>
            );
          })}
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          {clickedPlayer && (
            <div className="statsDiv">
              <thead>
                <tr>
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
                  <th className="text-left">IP</th>
                  <th className="text-left">W</th>
                  <th className="text-left">L</th>
                </tr>
              </thead>
              <tr id="tr">
                <td id="statsTD" className="text-left">
                  {clickedPlayer.First} {clickedPlayer.Last}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.GP}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.AB}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.AVG}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.OBP}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.OPS}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.SLG}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.H}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer["1B"]}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer["2B"]}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer["3B"]}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.HR}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.RBI}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.R}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.BB}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.IP}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.W}
                </td>
                <td id="statsTD" className="text-left">
                  {clickedPlayer.L}
                </td>
              </tr>
              <button className="button" onClick={closeModal}>
                CLOSE
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default Favorites;
