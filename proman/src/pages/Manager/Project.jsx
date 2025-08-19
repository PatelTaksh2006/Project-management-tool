// import React, { useMemo, useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Button,
//   Modal,
//   Form,
//   InputGroup,
//   Badge,
//   ProgressBar,
//   Table,
//   Dropdown,
//   ButtonGroup,
// } from "react-bootstrap";
// import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/Sidebar";

// // Helper to render status as Bootstrap badge variant

// export default function Projects() {
//   const [showAdd, setShowAdd] = useState(false);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [sortBy, setSortBy] = useState("updated"); // "name" | "progress" | "updated"

// Demo data in component state (replace with API later)
// Add modal form state
// const [form, setForm] = useState({
//   name: "",
//   owner: "",
//   status: "Active",
//   progress: 0,
//   tasksDone: 0,
//   tasksTotal: 0,
//   team: "",
//   startDate: "",
//   dueDate: "",
// });

//   return (
//     <div className="bg-light min-vh-100">
//       <Navbar />

//       <Row className="g-4">
//         {/* Sidebar */}
//         <Col xs={12} md={3} lg={2}>
//           <Sidebar />
//         </Col>

//         {/* Main */}
//         <Col xs={12} md={9} lg={10}>
//           {/* Header bar */}
//           <Row className="g-3 align-items-center mb-2">
//             <Col xs={12} md={6}>
//               <h3 className="mb-0">Projects</h3>
//               <div className="text-muted small">
//                 Manage and track all projects in one place
//               </div>
//             </Col>
//             <Col xs={12} md={6} className="text-md-end">
//               <Button variant="primary" onClick={() => setShowAdd(true)}>
//                 + Add New Project
//               </Button>
//             </Col>
//           </Row>

//           {/* Stats cards */}
//           <Row className="g-3 mb-1">
//             <Col sm={6} lg={3}>
//               <Card className="h-100">
//                 <Card.Body>
//                   <div className="text-muted">Total</div>
//                   <h4 className="mb-0">5</h4>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col sm={6} lg={3}>
//               <Card className="h-100">
//                 <Card.Body>
//                   <div className="text-muted">Active</div>
//                   <h4 className="mb-0">
//                     2
//                     <Badge bg="primary" pill className="ms-1">
//                       Active
//                     </Badge>
//                   </h4>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col sm={6} lg={3}>
//               <Card className="h-100">
//                 <Card.Body>
//                   <div className="text-muted">Completed</div>
//                   <h4 className="mb-0">
//                     4
//                     <Badge bg="success" pill className="ms-1">
//                       Done
//                     </Badge>
//                   </h4>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col sm={6} lg={3}>
//               <Card className="h-100">
//                 <Card.Body>
//                   <div className="text-muted">Overall Progress</div>
//                   <ProgressBar now={35} label={`35%`} />
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>

//           {/* Filters */}
//           <Card className="mb-3">
//             <Card.Body>
//               <Row className="g-2 align-items-center">
//                 <Col xs={12} md={6} lg={5}>
//                   <InputGroup>
//                     <InputGroup.Text id="search-addon">Search</InputGroup.Text>
//                     <Form.Control
//                       placeholder="Search by name, owner, or team"
//                       aria-label="Search"
//                       aria-describedby="search-addon"
//                       // value={search}
//                       // onChange={(e) => setSearch(e.target.value)}
//                     />
//                   </InputGroup>
//                 </Col>
//                 <Col xs={6} md={3} lg={3}>
//                   <Form.Select
//                   // value={statusFilter}
//                   // onChange={(e) => setStatusFilter(e.target.value)}
//                   >
//                     <option>All</option>
//                     <option>Active</option>
//                     <option>Completed</option>
//                     <option>On Hold</option>
//                     <option>Delayed</option>
//                   </Form.Select>
//                 </Col>
//                 <Col xs={6} md={3} lg={2}>
//                   <Form.Select
//                   // value={sortBy}
//                   // onChange={(e) => setSortBy(e.target.value)}
//                   >
//                     <option value="updated">Sort: Last Updated</option>
//                     <option value="name">Sort: Name</option>
//                     <option value="progress">Sort: Progress</option>
//                   </Form.Select>
//                 </Col>
//                 <Col xs={12} lg={2} className="text-lg-end">
//                   <Button
//                     variant="outline-secondary"
//                     // onClick={() => { setSearch(""); setStatusFilter("All"); setSortBy("updated"); }}
//                   >
//                     Reset
//                   </Button>
//                 </Col>
//               </Row>
//             </Card.Body>
//           </Card>

//           {/* Projects table */}
//           <Card>
//             <Card.Body className="p-0">
//               <Table responsive hover className="mb-0 align-middle">
//                 <thead className="table-light">
//                   <tr>
//                     <th>Name</th>
//                     <th className="d-none d-lg-table-cell">Owner</th>
//                     <th>Status</th>
//                     <th>Progress</th>
//                     <th className="d-none d-md-table-cell">Tasks</th>
//                     <th className="d-none d-xl-table-cell">Team</th>
//                     <th className="d-none d-xl-table-cell">Start</th>
//                     <th className="d-none d-xl-table-cell">Due</th>
//                     <th className="text-end">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody></tbody>
//               </Table>
//             </Card.Body>
//             {/* <Card.Footer className="text-muted small">
//                 Showing {sorted.length} of {projects.length} projects
//               </Card.Footer> */}
//           </Card>
//         </Col>
//       </Row>
//       {/* </Container> */}

//       {/* Add Project Modal */}
//       <Modal centered>
//         <Form>
//           <Modal.Header closeButton>
//             <Modal.Title>Add New Project</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Row className="g-3">
//               <Col md={8}>
//                 <Form.Group controlId="formName">
//                   <Form.Label>Project Name</Form.Label>
//                   <Form.Control
//                     required
//                     value={form.name}
//                     // onChange={(e) => setForm({ ...form, name: e.target.value })}
//                     placeholder="Enter project name"
//                   />
//                 </Form.Group>
//               </Col>

//               <Col md={6}>
//                 <Form.Group controlId="formStatus">
//                   <Form.Label>Status</Form.Label>
//                   <Form.Select
//                     value={form.status}
//                     // onChange={(e) => setForm({ ...form, status: e.target.value })}
//                   >
//                     <option>Active</option>
//                     <option>Completed</option>
//                     <option>On Hold</option>
//                     <option>Delayed</option>
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group controlId="formProgress">
//                   <Form.Label>Progress (%)</Form.Label>
//                   <Form.Control
//                     type="number"
//                     min={0}
//                     max={100}
//                     value={form.progress}
//                     // onChange={(e) => setForm({ ...form, progress: e.target.value })}
//                   />
//                 </Form.Group>
//               </Col>

//               <Col md={6}>
//                 <Form.Group controlId="formStart">
//                   <Form.Label>Start Date</Form.Label>
//                   <Form.Control
//                     type="date"
//                     value={form.startDate}
//                     // onChange={(e) => setForm({ ...form, startDate: e.target.value })}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group controlId="formDue">
//                   <Form.Label>Due Date</Form.Label>
//                   <Form.Control
//                     type="date"
//                     value={form.dueDate}
//                     // onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               variant="outline-secondary"
//               // onClick={() => setShowAdd(false)}
//             >
//               Cancel
//             </Button>
//             <Button type="submit" variant="primary">
//               Save Project
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </div>
//   );
// }

import React from "react";
import Search_form from "../../components/Search_form";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Row, Col, Button, Container, Badge, Table } from "react-bootstrap";
export default function Project() {
  const projects = [
    {
      Id: 1,
      Name: "management tool",
      Employees: 20,
      Start_Date: "2025-09-21",
      End_date: "2025-01-29",
      Status: "Active",
    },
  ];
  return (
    <div>
      <Navbar />
      <Row>
        <Col md={3}>
          <Sidebar projects={"./Project"} />
        </Col>
        <Col md={8}>
          <br></br>
          <Container className="fluid" style={{ paddingTop: 60, margin: 20 }}>
            <Row>
              <Col xs={12} md={6}>
                <h3 className="mb-0">Projects</h3>
                <div className="text-muted small">
                  Manage and track all projects in one place
                </div>
              </Col>
              <Col sm={{ span: 3, offset: 3 }}>
                <Button className="primary">Add new Project</Button>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col sm={4}>
                <DisplayProject name="Active" count={2} />
              </Col>
              <Col sm={4}>
                <DisplayProject name="Completed" count={5} />
              </Col>
              <Col sm={4}>
                <DisplayProjectStatus name="Pending" count={5} />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col sm={6}>
                <Search_form />
              </Col>
            </Row>
          </Container>
          <Container style={{ paddingTop: "20px" }}>
            <Row>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Employees</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.forEach((element) => (
                    <DisplayProject element={element} />
                  ))}
                </tbody>
              </Table>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

const DisplayProjectStatus = ({ name, count }) => {
  return (
    <>
      {/* 🔥 Scoped Styles */}
      <style>
        {`
          .project-box {
            background: #ffffff;
            border: 1px solid #ddd;
            border-radius: 16px;
            padding: 25px;
            text-align: center;
            margin: 15px 0;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
          }

          .project-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }

          .project-title {
            font-size: 18px;
            font-weight: 600;
            color: #444;
            margin-bottom: 10px;
          }

          .project-count {
            font-size: 28px;
            font-weight: bold;
            color: #0d6efd;
          }
        `}
      </style>

      {/* 🔥 UI */}
      <div className="project-box">
        <div className="project-title">{name}</div>
        <div className="project-count">
          {count}
          <Badge bg="primary" pill className="ms-2">
            {name}
          </Badge>
        </div>
      </div>
    </>
  );
};

const DisplayProject = ({ element }) => (
  <tr>
    <td>{element.Id}</td>
    <td>{element.Name}</td>
    <td>{element.Employees}</td>
    <td>{element.Start_Date}</td>
    <td>{element.End_Date}</td>
    <td>{element.Status}</td>
    <td>
      <Button variant="danger">Delete</Button>
    </td>
  </tr>
);
