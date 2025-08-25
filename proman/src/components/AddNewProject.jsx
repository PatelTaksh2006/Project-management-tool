// components/AddNewProject.jsx
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AddNewProject({ show, onClose, onProjectAdd }) {
  // Form data state
  const [formData, setFormData] = useState({
    Id: '',
    Name: '',
    Employees: '',
    Start_Date: '',
    End_date: '',
    Status: 'Active'
  });

  // Handle modal close
  const handleClose = () => {
    // Reset form when closing
    setFormData({
      Id: '',
      Name: '',
      Employees: '',
      Start_Date: '',
      End_date: '',
      Status: 'Active'
    });
    if (onClose) {
      onClose(); // Call parent's close handler
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert form data to match your project structure
    const newProject = {
      Id: parseInt(formData.Id),
      Name: formData.Name,
      Employees: parseInt(formData.Employees),
      Start_Date: formData.Start_Date,
      End_date: formData.End_date,
      Status: formData.Status
    };

    // Call parent callback if provided
    if (onProjectAdd) {
      onProjectAdd(newProject);
    }

    console.log('New Project Created:', newProject);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Project</Modal.Title>
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
            Create Project
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
