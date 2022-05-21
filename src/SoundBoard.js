import React from "react";
import SoundPlayer from "./SoundPlayer";

export default function SoundBoard({ theSounds }) {
  return theSounds.map((eachSound) => {
    return (
      <>
        <SoundPlayer key={eachSound.id} aSound={eachSound}></SoundPlayer>
        <br></br>
        <br></br>
      </>
    );
  });
}
