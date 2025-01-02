import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NBAData from "./components/NBAData";
import GameDetails from "./components/GameDetails";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<NBAData />} />

        {/* Game Details Page */}
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
