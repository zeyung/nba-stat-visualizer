import { useLocation } from "react-router-dom";

const GameDetails = () => {
  const { state } = useLocation();
  const { game } = state || {};

  if (!game) {
    return <div>No game details available</div>;
  }

  return (
    <div className="game-details-container">
      <h2>Game Details</h2>
      <div className="teams">
        <div className="team">
          <img src={game.teams.home.logo} alt={game.teams.home.name} className="team-logo" />
          <h3>{game.teams.home.name}</h3>
          <p>Points: {game.homePoints}</p>
        </div>
        <div className="team">
          <img src={game.teams.away.logo} alt={game.teams.away.name} className="team-logo" />
          <h3>{game.teams.away.name}</h3>
          <p>Points: {game.awayPoints}</p>
        </div>
      </div>
      <div className="game-date">
        <strong>Date:</strong>{" "}
        {new Date(game.date).toLocaleString("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        })}
      </div>
    </div>
  );
};

export default GameDetails;
