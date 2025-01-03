const API_BASE_URL = "https://nba-stat-visualizer.onrender.com"; // Backend Render deployment URL

export const fetchGames = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/nba/games`);
        if (!response.ok) throw new Error("Failed to fetch games from the backend");
        return await response.json();
    } catch (err) {
        console.error("Error fetching games from backend:", err);
        return []; // Return an empty array if fetching fails
    }
};
