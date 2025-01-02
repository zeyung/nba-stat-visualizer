// src/services/nbaApi.js

const API_URL = "http://localhost:5004/api/nba/games"; // Backend endpoint

/**
 * Fetches all NBA games from the backend server.
 * @returns {Promise<Array>} An array of game objects.
 */
export const fetchGames = async () => {
  try {
    // Fetch the data from the backend
    const response = await fetch(API_URL);

    // Check if the response is not OK
    if (!response.ok) {
      throw new Error("Failed to fetch games from the backend");
    }

    // Parse the response JSON
    const data = await response.json();

    // Return the fetched games data
    return data;
  } catch (err) {
    // Log any errors and return an empty array
    console.error("Error fetching games:", err);
    return [];
  }
};
