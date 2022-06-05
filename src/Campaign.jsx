import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { getCampaign, getScene } from "./data/Data";

export default function Campaign() {
  const params = useParams();
  const navigate = useNavigate();
  const theCampaign = getCampaign(params.campaignId);

  return (
    <>
      <Row className="m-4 gy-4">
        {theCampaign.scenes.map((eachSceneId) => {
          const theScene = getScene(eachSceneId);
          return (
            <Col sm="12" md="6" xxl="4">
              <Card
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/" + theCampaign.id + "/" + theScene.id);
                }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    objectFit: "cover",
                    height: "30vh",
                  }}
                  src={"img/" + theScene.image}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>{theScene.name}</Card.Title>
                  <Card.Text>Sounds: {theScene.sounds.join(", ")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Outlet />
    </>
  );
}
