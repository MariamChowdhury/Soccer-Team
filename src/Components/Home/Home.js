import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import "./Home.css";

const Home = () => {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setPlayer(data.teams));
  }, []);

  return (
    <div>
      <div className="home-banner">
        <h1 className="text-center text-white">Soccer teams of England</h1>
      </div>
      <div className="player-container">
        {player.map((playerInfo) => (
          <Player key={player.idTeam} playerInfo={playerInfo}></Player>
        ))}
      </div>
    </div>
  );
};

export default Home;
