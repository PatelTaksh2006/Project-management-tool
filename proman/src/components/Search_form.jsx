import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
export default function search_form() {
  return (
    <div className="d-flex flex-row">
      <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-0 me-2" controlId="formBasicSearch">
          {/* <Form.Label>search</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="search by name"
            style={{ width: "600px" }}
          />
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}
