import React from "react";
import { Link } from "react-router-dom";

export default function FallbackPage() {
  const theImageSize = 300;
  return (
    <div style={{ "text-align": "center" }}>
      <h1>404 :(</h1>
      <img
        width={theImageSize}
        height={theImageSize}
        src="/img/404-image.png"
      />
      <h3>Hier scheint nichts zu sein...</h3>
      <Link to="/">Zurück zur Homepage</Link>
    </div>
  );
}
