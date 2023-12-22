import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function ListPost() {
  return (
    <>
      <Container className="mt-4">
        <Row style={{ justifyContent: "space-between" }}>
          <Col>Showing 1 - 10 of 100</Col>
          <Col>
            <div>
              <label className="pe-2">Show per page:</label>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon marginStart="25px" />}
                  colorScheme="grey"
                  variant="outline"
                  borderRadius="500px"
                >
                  10
                </MenuButton>
                <MenuList>
                  <MenuItem>10</MenuItem>
                  <MenuItem>20</MenuItem>
                  <MenuItem>50</MenuItem>
                </MenuList>
              </Menu>

              <label className="pe-2 ps-4">Short By:</label>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon marginStart="25px" />}
                  colorScheme="grey"
                  variant="outline"
                  borderRadius="500px"
                >
                  Newest
                </MenuButton>
                <MenuList>
                  <MenuItem>Newest</MenuItem>
                  <MenuItem>Old</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ListPost;
