import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Card, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SoundPlayer({ aSound }) {
  const [play, exposedData] = useSound(aSound.soundFile, {
    onend: () => {
      setSeconds(0);
      setIsPlaying(false);
    },
  });

  const theLengthInSeconds = parseInt(exposedData.duration / 1000);

  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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
    } else {
      playSound();
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
        <Card.Text>
          Länge: {seconds}:{theLengthInSeconds}
        </Card.Text>
        <Button onClick={handlePlayClicked}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <Button onClick={handleStopClicked}>Reset</Button>
        <br></br>
      </Card.Body>
    </Card>
  );
}
