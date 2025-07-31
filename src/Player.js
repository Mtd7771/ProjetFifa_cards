import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const Player = ({
  name = "Unknown",
  team = "Unknown",
  nationality = "Unknown",
  number = 0,
  age = 0,
  image = "https://via.placeholder.com/150"
}) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Number:</strong> {number} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  number: PropTypes.number,
  age: PropTypes.number,
  image: PropTypes.string,
};

export default Player;