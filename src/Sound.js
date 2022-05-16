import React from "react";
import useSound from "use-sound";

export default function Sound({ aSound }) {
  const [play] = useSound(aSound.soundFile);

  return (
    <label>
      <button onClick={play}>Play</button>
      {aSound.name}
    </label>
  );
}
