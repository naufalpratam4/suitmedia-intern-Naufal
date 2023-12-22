import React from "react";
import CardComponent from "../../card/CardComponent";
import { Col, Container, Row } from "react-bootstrap";

function CardList() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <CardComponent
              date="23 Desember 2023"
              title="Kenali Tingkatan Influencers berdasarkan Jumlah Followers"
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <CardComponent
              date="23 Desember 2023"
              title="Kenali Tingkatan Influencers berdasarkan Jumlah Followers"
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <CardComponent
              date="23 Desember 2023"
              title="Kenali Tingkatan Influencers berdasarkan Jumlah Followers"
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <CardComponent
              date="23 Desember 2023"
              title="Kenali Tingkatan Influencers berdasarkan Jumlah Followers"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardList;
