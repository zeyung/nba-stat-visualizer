// src/components/GameStatsModal.jsx
import React from "react";

const GameStatsModal = ({ game, onClose }) => {
  if (!game) return null;

  const { home, away } = game.teams;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg w-3/4 max-w-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">
          {home.name} vs {away.name}
        </h2>
        <div className="flex justify-between items-center mb-6">
          <div className="text-center">
            <img
              src={home.logo}
              alt={`${home.name} logo`}
              className="w-16 h-16 mx-auto"
            />
            <p className="font-semibold mt-2">{home.name}</p>
          </div>
          <p className="text-2xl font-bold">vs</p>
          <div className="text-center">
            <img
              src={away.logo}
              alt={`${away.name} logo`}
              className="w-16 h-16 mx-auto"
            />
            <p className="font-semibold mt-2">{away.name}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Game Details</h3>
          <p>Date: {game.date}</p>
          <p>Home Team Points: {game.homePoints}</p>
          <p>Away Team Points: {game.awayPoints}</p>
          {/* Add more detailed stats here */}
        </div>
      </div>
    </div>
  );
};

export default GameStatsModal;
