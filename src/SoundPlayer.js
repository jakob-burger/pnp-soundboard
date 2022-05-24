import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SoundPlayer({ aSound }) {
  const [play, exposedData] = useSound(aSound.soundFile, {
    onend: () => {
      setSeconds(0);
      setIsPlaying(false);
      setPlayIconClass("bi-play");
    },
  });

  const theLengthInSeconds = parseInt(exposedData.duration / 1000);

  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playIconClass, setPlayIconClass] = useState("bi-play");

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

  function handlePlayClicked() {
    if (isPlaying) {
      exposedData.pause();
      clearInterval(intervalId);
      setPlayIconClass("bi-play");
    } else {
      playSound();
      setPlayIconClass("bi-pause");
    }
    setIsPlaying(!isPlaying);
  }

  function handleStopClicked() {
    exposedData.stop();
    setIsPlaying(false);
    setSeconds(0);
    clearInterval(intervalId);
  }

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs="1">
            <i className={"bi " + aSound.iconClass}></i>
          </Col>
          <Col>
            <Card.Title>{aSound.name}</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col xs="auto">
            <i
              className={"bi " + playIconClass}
              onClick={handlePlayClicked}
              style={{ "font-size": 24 }}
            ></i>
            <i
              className="bi bi-skip-start"
              style={{ "font-size": 24 }}
              onClick={handleStopClicked}
            ></i>
          </Col>
          <Col>
            <Card.Text>
              Länge: {seconds}:{theLengthInSeconds}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
