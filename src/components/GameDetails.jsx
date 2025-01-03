import React, { useEffect, useState } from "react";
import { fetchGames } from "../services/nbaApi";

const GameDetails = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const gamesData = await fetchGames();
            setGames(gamesData);
        };
        fetchData();
    }, []);

    return (
        <div className="game-details">
            <h1>NBA Games</h1>
            {games.length === 0 ? (
                <p>No games available</p>
            ) : (
                games.map((game, index) => (
                    <div key={index} className="game-card">
                        <h3>
                            {game.teams.home.name} vs {game.teams.away.name}
                        </h3>
                        <p>
                            Score: {game.scores.home.total || 0} -{" "}
                            {game.scores.away.total || 0}
                        </p>
                        <img
                            src={game.teams.home.logo}
                            alt={game.teams.home.name}
                        />
                        <img
                            src={game.teams.away.logo}
                            alt={game.teams.away.name}
                        />
                    </div>
                ))
            )}
        </div>
    );
};

export default GameDetails;
