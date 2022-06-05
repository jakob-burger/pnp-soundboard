import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Outlet } from "react-router-dom";
import { getCampaigns } from "./data/Data";

export default function CampaignOverview() {
  let navigate = useNavigate();
  const campaigns = getCampaigns();

  return (
    <>
      {campaigns.map((eachCampaign) => {
        return (
          <Card
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/" + eachCampaign.id);
            }}
          >
            <Card.Body>
              <Card.Title>{eachCampaign.name}</Card.Title>
              <Card.Text>Szenen: {eachCampaign.scenes.join(", ")}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      <Outlet />
    </>
  );
}
