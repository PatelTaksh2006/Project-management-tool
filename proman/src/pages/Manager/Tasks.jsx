import Search_form from "../../components/Search_form";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Badge,
  Table,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import AddNewProject from "../../components/AddNewProject";

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
    {
      Id: 2,
      Name: "analytics platform",
      Employees: 8,
      Start_Date: "2025-07-10",
      End_date: "2025-12-01",
      Status: "Pending",
    },
    {
      Id: 3,
      Name: "crm revamp",
      Employees: 14,
      Start_Date: "2025-05-15",
      End_date: "2025-10-30",
      Status: "Active",
    },
    {
      Id: 4,
      Name: "website redesign",
      Employees: 5,
      Start_Date: "2025-08-01",
      End_date: "2025-09-15",
      Status: "Completed",
    },
    {
      Id: 5,
      Name: "mobile app",
      Employees: 22,
      Start_Date: "2025-01-20",
      End_date: "2025-11-20",
      Status: "Active",
    },
    {
      Id: 6,
      Name: "billing automation",
      Employees: 11,
      Start_Date: "2024-12-05",
      End_date: "2025-03-31",
      Status: "Completed",
    },
    {
      Id: 7,
      Name: "data migration",
      Employees: 9,
      Start_Date: "2025-03-01",
      End_date: "2025-06-30",
      Status: "Completed",
    },
    {
      Id: 8,
      Name: "security audit",
      Employees: 4,
      Start_Date: "2025-09-05",
      End_date: "2025-10-05",
      Status: "Pending",
    },
    {
      Id: 9,
      Name: "internal wiki",
      Employees: 3,
      Start_Date: "2025-02-10",
      End_date: "2025-04-22",
      Status: "Completed",
    },
    {
      Id: 10,
      Name: "ai assistant",
      Employees: 18,
      Start_Date: "2025-06-18",
      End_date: "2025-12-31",
      Status: "Active",
    },
    {
      Id: 11,
      Name: "partner portal",
      Employees: 7,
      Start_Date: "2025-04-12",
      End_date: "2025-08-20",
      Status: "Completed",
    },
    {
      Id: 12,
      Name: "ops dashboard",
      Employees: 16,
      Start_Date: "2025-07-25",
      End_date: "2025-11-05",
      Status: "Active",
    },
    {
      Id: 13,
      Name: "qa framework",
      Employees: 6,
      Start_Date: "2025-05-01",
      End_date: "2025-07-01",
      Status: "Completed",
    },
    {
      Id: 14,
      Name: "iot gateway",
      Employees: 13,
      Start_Date: "2025-08-20",
      End_date: "2026-01-15",
      Status: "Pending",
    },
    {
      Id: 15,
      Name: "reporting suite",
      Employees: 10,
      Start_Date: "2025-03-18",
      End_date: "2025-10-01",
      Status: "Active",
    },
  ];

  const sortOptions = [
    { label: "Name", value: "name" },
    { label: "Employees", value: "employees" },
    { label: "Start Date", value: "startDate" },
    { label: "End Date", value: "endDate" },
  ];

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

  const DisplayProject = ({ ele }) => (
    <tr>
      <td>{ele.Id}</td>
      <td>{ele.Name}</td>
      <td>{ele.Employees}</td>
      <td>{ele.Start_Date}</td>
      <td>{ele.End_date}</td> {/* match the data key */}
      <td>{ele.Status}</td>
      <td style={{ textAlign: "center" }}>
        <Button className="me-2" variant="primary">
          View
        </Button>
        <Button className="me-2" variant="secondary">
          Edit{" "}
        </Button>
        <Button className="me-2" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );

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

  const SortDropdown = () => {
    return (
      <>
        <Dropdown as={ButtonGroup}>
          <Button variant="secondary">{sortedValue}</Button>

          <Dropdown.Toggle
            split
            variant="secondary"
            id="dropdown-split-basic"
          />

          <Dropdown.Menu>
            {sortOptions.map((option) => (
              <Dropdown.Item
                onClick={() => {
                  handlePick(option.value);
                }}
              >
                {option.value}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  };

  const filter_options = [
    { label: "All", value: "All" },
    { label: "Active", value: "Active" },
    { label: "Completed", value: "Completed" },
    { label: "Pending", value: "Pending" },
  ];
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
  const FilterButton = () => {
    return (
      <>
        <Dropdown as={ButtonGroup}>
          <Button variant="secondary">Filter</Button>

          <Dropdown.Toggle
            split
            variant="secondary"
            id="dropdown-split-basic"
          />

          <Dropdown.Menu>
            {filter_options.map((option) => (
              <Dropdown.Item
                onClick={() => {
                  handleFilter(option.value);
                }}
              >
                {option.value}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  };

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
                <FilterButton />
              </Col>
              <Col sm={{ offset: 1 }} style={{ paddingTop: "20px" }}>
                <SortDropdown />
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
