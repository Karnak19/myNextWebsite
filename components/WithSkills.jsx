import { Row } from "reactstrap";
import Skill from "./Skill";

const WithSkills = ({ skills }) => {
  return (
    <Row>
      {skills.map(skill => (
        <Skill {...skill} key={skill.id} />
      ))}
    </Row>
  );
};

export default WithSkills;
