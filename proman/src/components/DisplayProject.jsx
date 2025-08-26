import { Button } from "react-bootstrap";
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
export default DisplayProject;
