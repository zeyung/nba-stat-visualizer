import React, { useEffect, useState } from "react";
import axios from "axios";

function NBAData() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("/api/nba/games", {
          params: { season: "2023-2024" },
        });
        setGames(response.data.response || []);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h1>NBA Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.teams.home.name} vs {game.teams.away.name} - {game.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NBAData;
