import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ skills }) => {
  return (
    <Row>
      {skills.map(({ id, icons }) => {
        return (
          <Col lg={3} className="item">
            <div className="item-inner">
              <div className="item-icon">
                {icons.map(icon => (
                  <FontAwesomeIcon icon={icon} />
                ))}
              </div>
              <h3 className="item-title">title here</h3>
              <div className="item-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                culpa? Dolorum voluptatum ut dolores facilis.
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Skills;
