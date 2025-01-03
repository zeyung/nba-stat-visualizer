import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/nba/games");
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games data:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="App">
      <h1>NBA Games</h1>
      <div className="games-container">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <div className="team">
              <img
                src={game.teams.home.logo}
                alt={game.teams.home.name}
                className="team-logo"
              />
              <p>{game.teams.home.name}</p>
              <p>{game.scores.home.total || "0"}</p>
            </div>
            <div className="team">
              <img
                src={game.teams.away.logo}
                alt={game.teams.away.name}
                className="team-logo"
              />
              <p>{game.teams.away.name}</p>
              <p>{game.scores.away.total || "0"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
