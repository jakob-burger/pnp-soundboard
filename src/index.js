import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Scene from "./components/Scene.jsx";
import Campaign from "./components/Campaign.jsx";
import FallbackPage from "./components/FallbackPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path=":campaignId" element={<Campaign />} />
        <Route path=":campaignId/:sceneId" element={<Scene />} />
        <Route path="*" element={<FallbackPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
