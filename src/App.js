import React, { useState, useEffect } from "react";
import SoundBoard from "./SoundBoard";
import SoundUploadForm from "./SoundUploadForm";
import { v4 as uuidv4 } from "uuid";

const THE_LOCAL_STORAGE_KEY = "soundBoardApp.sounds";

function App() {
  const [theSounds, setSounds] = useState([]);

  useEffect(() => {
    const theStoredSounds = JSON.parse(
      localStorage.getItem(THE_LOCAL_STORAGE_KEY)
    );
    if (theStoredSounds.length > 0) {
      setSounds(theStoredSounds);
      console.log(theStoredSounds);
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
