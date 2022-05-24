import React, { useState, useEffect } from "react";
import SoundBoard from "./SoundBoard";
import SoundUploadForm from "./SoundUploadForm";
import Sound from "./Sound";
import { v4 as uuidv4 } from "uuid";
import SoundsJsonData from "./data/sounds.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Helmet } from "react-helmet";
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

const THE_LOCAL_STORAGE_KEY = "soundBoardApp.sounds";

function App() {
  function importAll(aRequire) {
    let sounds = {};
    aRequire.keys().map((item, index) => {
      return (sounds[item.replace("./", "")] = aRequire(item));
    });
    return sounds;
  }

  const sounds = importAll(
    require.context("./data/sounds", false, /\.(mp3|wav)$/)
  );

  const initialSounds = SoundsJsonData.map((object, index) => {
    return new Sound(
      uuidv4(),
      object.name,
      object.fileName,
      sounds[object.fileName],
      object.iconClass
    );
  });

  const [theSounds, setSounds] = useState(initialSounds);

  useEffect(() => {
    const theStoredSounds = JSON.parse(
      localStorage.getItem(THE_LOCAL_STORAGE_KEY)
    );
    if (theStoredSounds != null && theStoredSounds.length > 0) {
      setSounds(theStoredSounds);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(THE_LOCAL_STORAGE_KEY, JSON.stringify(theSounds));
  }, [theSounds]);

  function addSound(theInputSoundNameString, theInputSoundPathString) {
    setSounds((aPreviousSoundsCollection) => {
      return [
        ...aPreviousSoundsCollection,
        new Sound(
          uuidv4(),
          theInputSoundNameString,
          theInputSoundPathString,
          sounds[theInputSoundPathString],
          ""
        ),
      ];
    });
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PnP SoundBoard</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SoundBoard theSounds={theSounds} />
    </>
  );
}

export default App;
