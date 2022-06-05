import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { Helmet } from "react-helmet";
import { Outlet, Link } from "react-router-dom";
import {
  faDragon,
  faBoltLightning,
  faWater,
  faHandSparkles,
  faCrow,
  faPaw,
  faCloudShowersHeavy,
  faWind,
  faSkull,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";
import CampaignOverview from "./CampaignOverview";

library.add(
  faDragon,
  faBoltLightning,
  faWater,
  faHandSparkles,
  faCrow,
  faPaw,
  faCloudShowersHeavy,
  faWind,
  faSkull,
  faFeather
);

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PnP SoundBoard</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <CampaignOverview />
      <Outlet />
    </>
  );
}

export default App;
