import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import {Row,Col} from "react-bootstrap";
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Row>
      <Col md={3}>
        <Sidebar projects={"./Project"}/>
      </Col>
      <Col md={8}>
      <Row className="pt-5">
        <Col md={{span:4,offset:0}} className="text-start">
          <div>
            <h3>Active Projects</h3>
            <ul>
              <li>1st project</li>
              <li>2nd Project</li>
              <li>3rd project</li>
            </ul>
          </div>
        </Col>
        <Col md={{span:4,offset:4}} className="text-start">
        <div>
          <h3>Performance</h3>
          Completed Projects<br></br>
        Completed task
        </div>
        </Col>
      </Row>
      <Row className="pt-5 mt-5">
        <Col md={{span:4,offset:0}} className="text-start">
          <div>
            <h3>Current Status</h3>
            <ul>
              <li>Total Project</li>
              <li>Total Task</li>

            </ul>
          </div>
        </Col>
        <Col md={{span:4,offset:4}} className="text-start">
        <div>
          <h3>Employee status</h3>
          <ul>
            <li>Top performer</li>
            <li>2nd performer</li>
          </ul>

        </div>
        </Col>
      </Row>
      </Col>
      </Row>
    </div>
  );
}
