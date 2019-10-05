import { useState } from "react";
import {
  faJsSquare,
  faReact,
  faVuejs,
  faNodeJs,
  faUbuntu,
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";

import Section from "./Section";
import WithSkills from "./WithSkills";

const Overview = () => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      icons: [faJsSquare],
      title: "JavaScript",
      desc: ""
    },
    {
      id: 2,
      icons: [faReact, faVuejs, "redux"],
      title: "Front End Development",
      desc: ""
    },
    {
      id: 3,
      icons: [faNodeJs],
      title: "Back End Development",
      desc: ""
    },
    { id: 4, icons: [faBootstrap], title: "", desc: "" },
    { id: 5, icons: [faUbuntu], title: "Environment", desc: "" }
  ]);
  return (
    <Section section="overview" title="What do I do">
      <div className="section-intro mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        non voluptates possimus exercitationem eaque. Error voluptates facilis
        aut incidunt necessitatibus?
      </div>
      <WithSkills skills={skills} />
    </Section>
  );
};

export default Overview;
