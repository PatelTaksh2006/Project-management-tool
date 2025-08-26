import Search_form from "../../components/Search_form";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { Row, Col, Button, Container, Table } from "react-bootstrap";
import AddNewProject from "../../components/AddNewProject";
import projects from "../../Data/Projects";
import DisplayProjectStatus from "../../components/DisplayProjectsStatus";
import DisplayProject from "../../components/DisplayProject";
import SortDropdown from "../../components/SortDropdown";
import FilterButton from "../../components/FilterButton";

export default function Project() {
  const [sortedValue, setSortedValue] = useState("Sort By");
  const [sortedArray, setSortedArray] = useState(projects);

  function handlePick(value) {
    setSortedValue(value);

    if (value === "name") {
      sortedArray.sort((a, b) => a.Name.localeCompare(b.Name));
      setSortedArray(sortedArray);
    } else if (value === "employees") {
      setSortedArray(sortedArray.sort((a, b) => a.Employees - b.Employees));
    } else if (value === "startDate") {
      setSortedArray(
        sortedArray.sort(
          (a, b) => new Date(a.Start_Date) - new Date(b.Start_Date)
        )
      );
    } else if (value === "endDate") {
      setSortedArray(
        sortedArray.sort((a, b) => new Date(a.End_date) - new Date(b.End_date))
      );
    }
  }

  const [filteredValue, setFilteredValue] = useState(projects);
  function handleFilter(value) {
    if (value === "All") {
      setFilteredValue(projects);
      setSortedArray(projects);
    } else {
      const filtered = projects.filter((ele) => ele.Status === value);
      setFilteredValue(filtered);
      setSortedArray(filtered);
    }
  }

  const [show, setShow] = useState(false);
  const handleAddProject = (newProjectData) => {
    // Generate new ID automatically (highest existing ID + 1)

    // Add new project to the existing projects array
    projects.push(newProjectData);
    setSortedArray([...projects]);
    // Update state to trigger re-render
  };
  return (
    <div>
      <Navbar />
      <Row>
        <Col md={3}>
          <Sidebar projects={"./Project"} />
        </Col>
        <Col md={8}>
          <Container className="fluid" style={{ paddingTop: 60, margin: 20 }}>
            <Row>
              <Col xs={12} md={6}>
                <h3 className="mb-0">Projects</h3>
                <div className="text-muted small">
                  Manage and track all projects in one place
                </div>
              </Col>
              <Col sm={{ span: 3, offset: 3 }}>
                <Button variant="primary" onClick={() => setShow(true)}>
                  Add new Project
                </Button>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col sm={4}>
                <DisplayProjectStatus
                  name="Active"
                  count={projects.filter((p) => p.Status == "Active").length}
                />
              </Col>
              <Col sm={4}>
                <DisplayProjectStatus
                  name="Completed"
                  count={projects.filter((p) => p.Status == "Completed").length}
                />
              </Col>
              <Col sm={4}>
                <DisplayProjectStatus
                  name="Pending"
                  count={projects.filter((p) => p.Status == "Pending").length}
                />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col sm={8}>
                <Search_form />
              </Col>
            </Row>
            <Row>
              <Col
                sm={{ span: 7, offset: 1 }}
                style={{ paddingTop: "20px", paddingLeft: 560 }}
              >
                <FilterButton handleFilter={handleFilter} />
              </Col>
              <Col sm={{ offset: 1 }} style={{ paddingTop: "20px" }}>
                <SortDropdown
                  handlePick={handlePick}
                  sortedValue={sortedValue}
                />
              </Col>
            </Row>
          </Container>
          <Container style={{ paddingTop: "20px" }}>
            <Row
              className="table-scroll-container"
              style={{
                "max-height": "300px",
                "overflow-y": "scroll",
              }}
            >
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
                  {sortedArray.map((element) => (
                    <DisplayProject ele={element} />
                  ))}
                </tbody>
              </Table>
            </Row>
          </Container>
        </Col>
      </Row>
      <AddNewProject
        show={show}
        onClose={() => setShow(false)}
        onProjectAdd={handleAddProject}
        // Add logic to update your projects array
        // setProjects(prev => [...prev, newProject]);
      />
    </div>
  );
}
