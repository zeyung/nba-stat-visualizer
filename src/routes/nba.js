const express = require("express");
const axios = require("axios");

const router = express.Router();

const API_BASE_URL = "https://v1.basketball.api-sports.io";
const API_KEY = "your_api_key_here"; // Replace with a valid API key

router.get("/games", async (req, res) => {
    try {
        const season = req.query.season || "2023-2024"; // Default to the 2023-2024 season
        console.log("Fetching games for season:", season);

        // Make a request to the external API
        const response = await axios.get(`${API_BASE_URL}/games`, {
            headers: {
                "x-rapidapi-host": "v1.basketball.api-sports.io",
                "x-rapidapi-key": API_KEY,
            },
            params: {
                league: 12, // NBA league ID
                season,
            },
        });

        console.log("External API response data:", response.data);
        res.json(response.data.response || []); // Return the array of games from the external API
    } catch (err) {
        console.error("Error fetching games:", err.message);
        res.status(500).json({ error: "Failed to fetch games" });
    }
});

module.exports = router;
