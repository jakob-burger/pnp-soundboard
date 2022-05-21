import React, { useState, useEffect } from "react";
import useSound from "use-sound";

export default function SoundPlayer({ aSound }) {
  const [play, exposedData] = useSound(aSound.soundFile, {
    onend: () => {
      setSeconds(0);
    },
  });

  const theLengthInSeconds = parseInt(exposedData.duration / 1000);

  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    if (intervalId > 0 && seconds >= theLengthInSeconds) {
      clearInterval(intervalId);
    }
  }, [seconds]);

  function playSound() {
    const newIntervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setIntervalId(newIntervalId);
    play();
  }

  return (
    <>
      <button onClick={playSound}>Play</button>
      <label>{aSound.name}</label>
      <br></br>
      <label>
        Länge: {seconds}:{theLengthInSeconds}
      </label>
    </>
  );
}
