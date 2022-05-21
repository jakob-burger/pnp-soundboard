import React from "react";
import SoundPlayer from "./SoundPlayer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

export default function SoundBoard({ theSounds }) {
  return (
    <Row>
      {theSounds.map((eachSound) => {
        return (
          <Col>
            <SoundPlayer key={eachSound.id} aSound={eachSound}></SoundPlayer>
          </Col>
        );
      })}
    </Row>
  );
}
