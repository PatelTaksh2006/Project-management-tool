import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container, Table, Button, Badge } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DisplayProjectInformation from "../../components/DisplayProjectInformation";
import projects from "../../Data/Projects";
import AddNewTask from "../../components/AddNewTask";
import EditTask from "../../components/EditTask";
// Mock data for demonstration




export default function ProjectTask() {
function addNewTask() {
  setShowCreateTask(true);
}

function onUpdateTask(task) {
  setSelectedTask(task);
  setUpdateTask(true);
}
function handleAddTask(newTask) {
  const updatedTasks = [...tasks, newTask];
  setTasks(updatedTasks);
  setProject(prev => ({ ...prev, task: updatedTasks }));
  //for reflecting changes in main projects array
}  

function handleTaskUpdate(updatedTask) {
  const updatedTasks = tasks.map(t => t.id === updatedTask.id ? updatedTask : t);
  setTasks(updatedTasks);
  setProject(prev => ({ ...prev, task: updatedTasks }));
  //for reflecting changes in main projects array
}
  const [project, setProject] = useState(projects.find(p => p.Id === 1) || {}
  );
  const [tasks, setTasks] = useState(projects.find(p => p.Id === 1)?.task || []);
  const {id}=useParams();
  const [showUpdateTask,setUpdateTask] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div>
      <Navbar name="manager"/>
      <Row>
        <Col md={3}>
          <Sidebar user={"manager"} value={"project"}/>
        </Col>
        <Col md={8}>
          <Container className="fluid" style={{ paddingTop: 60, margin: 20 }}>
            <Row>
              <Col xs={12} md={6}>
                <h3 className="mb-0">Project Details</h3>
                <div className="text-muted small">
                  View and manage all information and tasks for this project
                </div>
              </Col>
              <Col sm={{ span: 3, offset: 3 }}>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <DisplayProjectInformation
                  project={project}
                />
              </Col>
            </Row>
          </Container>
          <Container style={{ paddingTop: "20px" }}>
            <Row>
            <h4>Task Summary</h4>
            </Row>
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
            <th>Task Name</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Files</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center">
                No tasks found.
              </td>
            </tr>
          ) : (
            tasks.map((task, idx) => (
              
              <tr key={task.id}>
                
                <td>{idx + 1}</td>
                <td>{task.name}</td>
                <td>{task.assignedTo}</td>
                <td>
                  <Badge
                    bg={
                      task.status === "Completed"
                        ? "success"
                        : task.status === "In Progress"
                        ? "warning"
                        : "secondary"
                    }
                  >
                    {task.status}
                  </Badge>
                </td>
                <td>
                  <Badge
                    bg={
                      task.priority === "High"
                        ? "danger"
                        : task.priority === "Medium"
                        ? "warning"
                        : "secondary"
                    }
                  >
                    {task.priority}
                  </Badge>
                </td>
                <td style={{ whiteSpace: "nowrap" }}>{task.dueDate}</td>
                <td>
  {task.files && task.files.length > 0 ? (
    task.files.map((file, fidx) => (
      <a
        key={fidx}
        href={file.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          margin: "2px 6px 2px 0",
          padding: "4px 10px 4px 8px",
          borderRadius: "16px",
          background: "#f1f3f4",
          color: "#333",
          textDecoration: "none",
          fontSize: "0.95em",
          border: "1px solid #d1d5da",
          boxShadow: "0 1px 2px rgba(60,60,60,0.05)",
          verticalAlign: "middle"
        }}
      >
        <span role="img" aria-label="file" style={{ marginRight: 6, color: "#6c63ff" }}>@</span>
        {file.name}
      </a>
    ))
  ) : (
    <span>No files</span>
  )}
</td>
                <td>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onUpdateTask(task)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
              
              
            ))
          )}
        </tbody>
      </Table>
                    
            </Row>
<Row>
  <Button variant="success" className="mb-2" onClick={addNewTask}>Add New Task</Button>
</Row>
          </Container>
        </Col>
      </Row>

      <AddNewTask
              show={showCreateTask}
              onClose={() => setShowCreateTask(false)}
              onTaskAdd={handleAddTask}
              // Add logic to update your projects array
              // setProjects(prev => [...prev, newProject]);
            />

            <EditTask
  task={selectedTask}
  show={showUpdateTask}
  onClose={() => setUpdateTask(false)}
  onTaskUpdate={handleTaskUpdate}
/>
    </div>
  );
}