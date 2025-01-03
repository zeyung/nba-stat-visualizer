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
        <div>
            <h1>NBA Games</h1>
            {games.length === 0 ? (
                <p>No games available</p>
            ) : (
                games.map((game, index) => (
                    <div key={index}>
                        <h3>
                            {game.homeTeam.name} vs {game.awayTeam.name}
                        </h3>
                        <p>
                            Score: {game.scores.home} - {game.scores.away}
                        </p>
                        <img src={game.homeTeam.logo} alt={game.homeTeam.name} />
                        <img src={game.awayTeam.logo} alt={game.awayTeam.name} />
                    </div>
                ))
            )}
        </div>
    );
};

export default GameDetails;
