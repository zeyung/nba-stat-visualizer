const API_BASE_URL = "https://nba-stat-visualizer.onrender.com/api";

export const fetchGames = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/nba/games`);
    if (!response.ok) throw new Error("Failed to fetch games from backend");
    return await response.json();
  } catch (err) {
    console.error("Error fetching games:", err);
    return [];
  }
};
