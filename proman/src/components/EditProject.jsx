import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function EditProject({ project, show, onClose, onProjectUpdate }) {
  // Initialize form data with the project prop
  const [formData, setFormData] = useState({
    Id: "",
    Name: "",
    Employees: "",
    Start_Date: "",
    End_date: "",
    Status: "Active",
  });

  // Update form data when project prop changes
  useEffect(() => {
    if (project) {
      setFormData({
        Id: project.Id || "",
        Name: project.Name || "",
        Employees: project.Employees || "",
        Start_Date: project.Start_Date || "",
        End_date: project.End_date || "",
        Status: project.Status || "Active",
      });
    }
  }, [project, show]);

  // Handle modal close
  const handleClose = () => {
    setFormData({
      Id: "",
      Name: "",
      Employees: "",
      Start_Date: "",
      End_date: "",
      Status: "Active",
    });
    if (onClose) onClose();
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProject = {
      Id: parseInt(formData.Id),
      Name: formData.Name,
      Employees: parseInt(formData.Employees),
      Start_Date: formData.Start_Date,
      End_date: formData.End_date,
      Status: formData.Status,
    };
    if (onProjectUpdate) {
      onProjectUpdate(updatedProject);
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Project ID</Form.Label>
            <Form.Control
              type="number"
              name="Id"
              value={formData.Id}
              onChange={handleInputChange}
              placeholder="Enter project ID"
              required
              disabled // Usually ID is not editable
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              placeholder="Enter project name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Number of Employees</Form.Label>
            <Form.Control
              type="number"
              name="Employees"
              value={formData.Employees}
              onChange={handleInputChange}
              placeholder="Enter number of employees"
              min="1"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="Start_Date"
              value={formData.Start_Date}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="End_date"
              value={formData.End_date}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="Status"
              value={formData.Status}
              onChange={handleInputChange}
              required
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}