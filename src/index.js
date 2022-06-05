import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Scene from "./Scene.jsx";
import Campaign from "./Campaign.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path=":campaignId" element={<Campaign />} />
        <Route path=":campaignId/:sceneId" element={<Scene />} />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
