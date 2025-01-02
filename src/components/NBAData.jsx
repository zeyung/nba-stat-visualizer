import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchGames } from "../services/nbaApi";

const NBAData = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        if (data.length === 0) {
          setError("No games available.");
        } else {
          setGames(data);
          setFilteredGames(data);
          setError(null);
        }
      } catch (err) {
        setError("Failed to load games.");
      }
      setLoading(false);
    };
    loadGames();
  }, []);

  const filterGames = () => {
    let filtered = games;

    if (dateRange.start && dateRange.end) {
      filtered = filtered.filter(
        (game) =>
          new Date(game.date) >= new Date(dateRange.start) &&
          new Date(game.date) <= new Date(dateRange.end)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (game) =>
          game.teams.home.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.teams.away.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredGames(filtered);
  };

  useEffect(() => {
    filterGames();
  }, [searchTerm, dateRange, games]);

  const handleGameClick = (game) => {
    navigate(`/game/${game.date}`, { state: { game } });
  };

  if (loading) return <div>Loading games...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="nba-data-container">
      <h1>NBA Data Visualizer</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by team name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          className="date-input"
        />
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          className="date-input"
        />
      </div>
      <div className="games-container">
        {filteredGames.map((game, index) => (
          <div
            key={index}
            className="game-card"
            onClick={() => handleGameClick(game)}
          >
            <div className="teams">
              <img
                src={game.teams.home.logo}
                alt={game.teams.home.name}
                className="team-logo"
              />
              <span>{game.teams.home.name}</span>
              <span>vs</span>
              <img
                src={game.teams.away.logo}
                alt={game.teams.away.name}
                className="team-logo"
              />
              <span>{game.teams.away.name}</span>
            </div>
            <div className="game-date">
              {new Date(game.date).toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NBAData;
