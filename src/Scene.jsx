import React, { useState, useEffect } from "react";
import SoundBoard from "./SoundBoard";
import { useParams } from "react-router-dom";
import { getSounds, getScene, getSound } from "./data/Data";

const THE_LOCAL_STORAGE_KEY = "soundBoardApp.sounds";

export default function Scene() {
  const params = useParams();
  const theScene = getScene(params.sceneId);
  const initialSounds = theScene.sounds.map((eachSoundName) => {
    return getSound(eachSoundName);
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

  /*   function addSound(theInputSoundNameString, theInputSoundPathString) {
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
  } */
  return <SoundBoard theSounds={theSounds} />;
}
