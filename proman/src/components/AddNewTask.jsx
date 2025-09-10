import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AddNewTask({ empList,show, onClose, onTaskAdd }) {
  // Form data state
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    assignedTo: 'None',
    status: 'To Do',
    priority: 'Medium',
    dueDate: '',
    files: []
  });

  // Handle modal close
  const handleClose = () => {
    setFormData({
      id: '',
      name: '',
      assignedTo: '',
      status: 'To Do',
      priority: 'Medium',
      dueDate: '',
      files: []
    });
    if (onClose) {
      onClose();
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map(file => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    setFormData(prevData => ({
      ...prevData,
      files
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: parseInt(formData.id),
      name: formData.name,
      assignedTo: formData.assignedTo,
      status: formData.status,
      priority: formData.priority,
      dueDate: formData.dueDate,
      files: formData.files
    };
    if (onTaskAdd) {
      onTaskAdd(newTask);
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Task ID</Form.Label>
            <Form.Control
              type="number"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              placeholder="Enter task ID"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter task name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Assigned To</Form.Label>
            <Form.Select 
            name="AssignedTo"
            value={FormData.assignedTo}
            onChange={handleInputChange}
            required
            >
            {empList.map((e)=>(
              <option value="e.Id">{e.name}</option>
            ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              required
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              required
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Upload Files</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={handleFileChange}
            />
            <div className="mt-2">
              {formData.files.map((file, idx) => (
                <span
                  key={idx}
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
                  <span role="img" aria-label="file" style={{ marginRight: 6, color: "#6c63ff" }}>📎</span>
                  {file.name}
                </span>
              ))}
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Create Task
          </Button>
        </Modal.Footer>
      </Form>
      </Modal>
    );
}