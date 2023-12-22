import React from "react";
import { Container } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";

function CardComponent(props) {
  return (
    <Container>
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src="src/assets/logo/banner.jpg" />
        <Card.Body>
          <Card.Text>{props.date}</Card.Text>
          <Card.Text className="fw-semibold">{props.title}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardComponent;
