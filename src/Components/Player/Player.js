import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const Player = (props) => {
  const { strTeamBadge, strTeam, strSport, idTeam } = props.playerInfo;
  let history = useHistory();
  const handleTeam = (idTeam) => {
    const url = `team/${idTeam}`;
    history.push(url);
  };
  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="card-image" variant="top" src={strTeamBadge} />
        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>Sport Type: {strSport}</Card.Text>
          <Button onClick={() => handleTeam(idTeam)} variant="dark">
            Explore <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
