import React from "react";
import Sound from "./Sound";

export default function SoundBoard({ theSounds }) {
  return theSounds.map((eachSound) => {
    return <Sound key={eachSound.id} aSound={eachSound}></Sound>;
  });
}
