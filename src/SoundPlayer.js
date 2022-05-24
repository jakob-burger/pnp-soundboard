import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SoundPlayer({ aSound }) {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs="1">
            <FontAwesomeIcon icon={aSound.iconClass}></FontAwesomeIcon>
          </Col>
          <Col>
            <Card.Title>{aSound.name}</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <audio
              style={{ width: "100%" }}
              controls
              src={aSound.soundFile}
            ></audio>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
