const API_BASE_URL = "https://v1.basketball.api-sports.io";
const API_KEY = "your_api_key_here"; // Replace with your actual API key

router.get("/games", async (req, res) => {
    try {
        const season = req.query.season || "2023-2024"; // Default season
        const response = await axios.get(`${API_BASE_URL}/games`, {
            headers: {
                "x-rapidapi-host": "v1.basketball.api-sports.io",
                "x-rapidapi-key": API_KEY,
            },
            params: {
                league: 12, // Example league ID for NBA
                season,
            },
        });

        res.json(response.data); // Send the data back to the frontend
    } catch (err) {
        console.error("Error fetching games:", err.message);
        res.status(500).json({ error: "Failed to fetch games" });
    }
});


module.exports = router;
