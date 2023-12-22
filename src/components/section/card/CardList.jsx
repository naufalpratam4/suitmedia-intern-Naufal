import React from "react";
import CardComponent from "../../card/CardComponent";
import { Col, Container, Row } from "react-bootstrap";
import PaginationPages from "../../pagination/Pagination";
import { useState } from "react";
function CardList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    // Lakukan sesuatu ketika halaman berubah
    setCurrentPage(page);
  };
  return (
    <>
      <Container className="mt-3">
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
        <div className="text-center">
          <PaginationPages
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Container>
    </>
  );
}

export default CardList;
