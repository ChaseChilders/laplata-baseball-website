import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "react-modal";

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
    <div>
      <div>
        <div>
          <div className="table-title">FAVORITES</div>
        </div>
        <div className="cardContainer">
          {players.map((player, i) => {
            return (
              <div className="card" key={i}>
                <h1 className="playerNumber">#{player.Number}</h1>
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
            <>
              <h2>{clickedPlayer.First}</h2>
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default Favorites;
