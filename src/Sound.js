import React from "react";

export default function Sound({ aSound }) {
  return (
    <label>
      <button>Play</button>
      {aSound.name}
    </label>
  );
}
