const express = require("express");
const axios = require("axios");

const router = express.Router();

const API_BASE_URL = "https://v1.basketball.api-sports.io";
const API_KEY = "your_api_key_here"; // Add your API key here

router.get("/games", async (req, res) => {
    try {
        const season = req.query.season || "2023-2024";
        const response = await axios.get(`${API_BASE_URL}/games`, {
            headers: {
                "x-rapidapi-host": "v1.basketball.api-sports.io",
                "x-rapidapi-key": API_KEY,
            },
            params: {
                league: 12,
                season,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;