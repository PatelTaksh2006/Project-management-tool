import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Row, Col, Card, Badge, Container, ProgressBar, ListGroup } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div className="bg-light min-vh-100">
      <Navbar name="manager" />
      <Row className="g-0">
        {/* Sticky sidebar */}
        <Col
          md={3}
          className="bg-white border-end"
          style={{ position: "sticky", top: 0, alignSelf: "flex-start", height: "100vh", overflowY: "auto" }}
        >
          <Sidebar user="manager" value="dashboard" />
        </Col>

        <Col md={9} className="p-4">
          <Container fluid className="px-0">

            {/* Page header */}
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div>
                <h3 className="mb-1">Manager Dashboard</h3>
                <div className="text-muted">Overview of projects, performance, and budget</div>
              </div>
            </div>

            {/* Quick stat tiles */}
            

            {/* Main cards */}
            <Row className="g-3">
              <Col lg={6}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Header className="bg-success-subtle text-success fw-semibold">
                    <i className="bi bi-kanban me-2" />
                    Active Projects
                  </Card.Header>
                  <Card.Body>
                    <ul className="mb-0 ps-3">
                      <li className="mb-1">1st project</li>
                      <li className="mb-1">2nd Project</li>
                      <li className="mb-1">3rd project</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Header className="bg-primary-subtle text-primary fw-semibold">
                    <i className="bi bi-bar-chart-fill me-2" />
                    Performance
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <Badge bg="success" className="me-2">Completed Projects</Badge>
                        <span className="fw-semibold">12</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <Badge bg="info" className="me-2">Completed Tasks</Badge>
                        <span className="fw-semibold">48</span>
                      </div>
                    </div>
                    <hr />
                    <div className="text-muted small mb-1">Weekly completion</div>
                    <ProgressBar now={68} variant="success" label="68%" className="rounded-1" />
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Header className="bg-warning-subtle text-warning fw-semibold">
                    <i className="bi bi-activity me-2" />
                    Current Status
                  </Card.Header>
                  <Card.Body>
                    <ul className="mb-0 ps-3">
                      <li className="mb-2">
                        <Badge bg="primary" className="me-2">Total Projects</Badge>
                        15
                      </li>
                      <li>
                        <Badge bg="secondary" className="me-2">Total Tasks</Badge>
                        120
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Header className="bg-info-subtle text-info fw-semibold">
                    <i className="bi bi-currency-dollar me-2" />
                    Budget Overview
                  </Card.Header>
                  <Card.Body>
                    <ul className="mb-3 ps-3">
                      <li className="mb-2">
                        <Badge bg="success" className="me-2">Total Budget</Badge>
                        $120,000
                      </li>
                      <li className="mb-2">
                        <Badge bg="danger" className="me-2">Used</Badge>
                        $75,000
                      </li>
                      <li>
                        <Badge bg="info" className="me-2">Remaining</Badge>
                        $45,000
                      </li>
                    </ul>
                    <div className="text-muted small mb-1">Utilization</div>
                    <ProgressBar now={62} variant="info" label="62%" className="rounded-1" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Recent activity */}
            

          </Container>
        </Col>
      </Row>
    </div>
  );
}
