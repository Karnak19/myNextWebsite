import { useState } from "react";
import { Col } from "reactstrap";

import Section from "./Section";

const Main = () => {
  const [jobs, setJobs] = useState([
    {
      title: "ReactJS trainer",
      company: "Wild Code School",
      start: "February 2019",
      end: undefined,
      ul: [],
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium quo nihil rem expedita quamtenetur asperiores incidunt ipsa perferendis, rerum ullam dolorum, molestias, illum magni ut. Molestiae, errortempora!"
    }
  ]);
  const [projects, setProjects] = useState([]);
  return (
    <Col lg={8} xl={9} className="pr-0 pr-lg-5 resume-main">
      <Section items={jobs} title="Professional experiences" section="work" />
    </Col>
  );
};

export default Main;
