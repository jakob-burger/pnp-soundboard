import React, { useRef } from "react";

export default function SoundUploadForm({ addSound }) {
  const theSoundPathRef = useRef();
  const theSoundNameRef = useRef();

  function handleUploadClicked(anEvent) {
    const theInputSoundPathString = theSoundPathRef.current.value;
    const theInputSoundNameString = theSoundNameRef.current.value;
    if (theInputSoundPathString === "" || theInputSoundNameString === "")
      return;
    addSound(theInputSoundPathString, theInputSoundNameString);
    theSoundPathRef.current.value = null;
    theSoundNameRef.current.value = null;
  }

  return (
    <>
      <div>SoundUploadForm:</div>
      <input ref={theSoundPathRef} type="text"></input>
      <input ref={theSoundNameRef} type="text"></input>
      <button onClick={handleUploadClicked}>Upload</button>
    </>
  );
}
