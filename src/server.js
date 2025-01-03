const express = require("express");
const cors = require("cors");
const nbaRoutes = require("../routes/nba");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/nba", nbaRoutes);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
