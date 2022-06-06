import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Outlet } from "react-router-dom";
import { getCampaigns, getScene } from "../data/Data";

export default function CampaignOverview() {
  let navigate = useNavigate();
  const campaigns = getCampaigns();

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>PnP-Soundboard</h1>
        <h3>Bitte wählen Sie eine Kampagne:</h3>
      </div>
      <Row className="m-4 gy-4">
        {campaigns.map((eachCampaign) => {
          return (
            <Col sm="12" md="12" xxl="6" key={eachCampaign.id}>
              <Card
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/" + eachCampaign.id);
                }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    objectFit: "cover",
                    height: "60vh",
                  }}
                  src={"img/" + eachCampaign.image}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>{eachCampaign.name}</Card.Title>
                  <Card.Text>
                    Szenen:{" "}
                    {eachCampaign.scenes
                      .map((eachSceneId) => {
                        return getScene(eachSceneId).name;
                      })
                      .join(", ")}
                  </Card.Text>
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
