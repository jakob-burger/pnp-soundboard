import React from "react";
import Scene from "./Scene";
import ScenesJsonData from "./data/scenes.json";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { getCampaign, getScene } from "./data/Data";

export default function Campaign() {
  let params = useParams();
  let navigate = useNavigate();
  const theCampaign = getCampaign(params.campaignId);

  return (
    <>
      {theCampaign.scenes.map((eachSceneId) => {
        const theScene = getScene(eachSceneId);
        return (
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/" + theCampaign.id + "/" + theScene.id);
            }}
          >
            <Card.Body>
              <Card.Title>{theScene.name}</Card.Title>
              <Card.Text>Sounds: {theScene.sounds.join(", ")}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      <Outlet />
    </>
  );
}
