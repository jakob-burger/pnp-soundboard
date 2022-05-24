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
            <Col xs="12" sm="6" md="4" lg="4" xl="3">
              <SoundPlayer key={eachSound.id} aSound={eachSound}></SoundPlayer>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
