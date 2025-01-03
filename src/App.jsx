import React from "react";
import { Routes, Route } from "react-router-dom";
import NBAData from "./components/NBAData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NBAData />} />
    </Routes>
  );
}

export default App;
