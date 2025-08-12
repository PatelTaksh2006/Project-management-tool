import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Row, Col, Button } from "react-bootstrap";
export default function Project() {
  return (
    <div>
      <Navbar />
      <Row>
        <Col md={3}>
          <Sidebar projects={"./Project"} />
        </Col>
        <Col md={8}>
          <Row className="mt-3 bg-primary">
            <Button variant="primary" size="sm" className="w-45">
              New
            </Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
