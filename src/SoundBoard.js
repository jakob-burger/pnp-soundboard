import React from "react";
import SoundPlayer from "./SoundPlayer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

export default function SoundBoard({ theSounds }) {
  return (
    <div className="m-5">
      <Row className="m-4 gy-4">
        {theSounds.map((eachSound) => {
          return (
            <Col sm="12" md="6" xxl="3" key={eachSound.id}>
              <SoundPlayer aSound={eachSound}></SoundPlayer>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
