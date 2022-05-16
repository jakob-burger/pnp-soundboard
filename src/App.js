import React, { useState, useEffect } from "react";
import SoundBoard from "./SoundBoard";
import SoundUploadForm from "./SoundUploadForm";
import { v4 as uuidv4 } from "uuid";

const THE_LOCAL_STORAGE_KEY = "soundBoardApp.sounds";

function App() {
  function importAll(aRequire) {
    let sounds = {};
    aRequire.keys().map((item, index) => {
      return (sounds[item.replace("./", "")] = aRequire(item));
    });
    return sounds;
  }

  const sounds = importAll(require.context("./sounds", false, /\.(mp3|wav)$/));

  console.log(Object.keys(sounds));
  const initialSounds = Object.keys(sounds).map(function (object) {
    return {
      id: uuidv4(),
      name: object,
      path: object,
      soundFile: sounds[object],
    };
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
        {
          id: uuidv4(),
          name: theInputSoundNameString,
          path: theInputSoundPathString,
          soundFile: sounds[theInputSoundPathString],
        },
      ];
    });
  }

  return (
    <>
      <SoundBoard theSounds={theSounds} />
      <SoundUploadForm addSound={addSound} />
    </>
  );
}

export default App;
