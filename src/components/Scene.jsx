import React, { useState, useEffect } from "react";
import SoundBoard from "./SoundBoard";
import { useParams } from "react-router-dom";
import { getScene, getSound } from "../data/Data";
import FallbackPage from "./FallbackPage";

const THE_LOCAL_STORAGE_KEY = "soundBoardApp.sounds";

export default function Scene() {
  const params = useParams();
  const theScene = getScene(params.sceneId);
  let initialSounds;
  if (theScene !== undefined) {
    initialSounds = theScene.sounds.map((eachSoundName) => {
      return getSound(eachSoundName);
    });
  }

  const [theSounds, setSounds] = useState(initialSounds);

  useEffect(() => {
    const theItem = localStorage.getItem(THE_LOCAL_STORAGE_KEY);
    let theStoredSounds;
    if (theItem !== undefined && theItem !== "undefined") {
      theStoredSounds = JSON.parse(theItem);
    }
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
  if (theScene === undefined) {
    return <FallbackPage />;
  } else {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>{theScene.name + " Soundboard"}</h1>
        <SoundBoard theSounds={theSounds} />
      </>
    );
  }
}
