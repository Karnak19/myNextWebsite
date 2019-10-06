import { Row } from "reactstrap";

const Body = ({ children }) => {
  return (
    <div className="resume-body">
      <Row>{children}</Row>
    </div>
  );
};

export default Body;
