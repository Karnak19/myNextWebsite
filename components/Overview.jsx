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
import Skills from "./Skills";

const Overview = () => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      icons: [faJsSquare]
    },
    {
      id: 2,
      icons: [faReact, faVuejs]
    },
    {
      id: 3,
      icons: [faNodeJs]
    },
    { id: 4, icons: [faBootstrap] },
    { id: 5, icons: [faUbuntu] }
  ]);
  return (
    <Section section="overview" title="What do I do">
      <div className="section-intro mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        non voluptates possimus exercitationem eaque. Error voluptates facilis
        aut incidunt necessitatibus?
      </div>
      <Skills skills={skills} />
    </Section>
  );
};

export default Overview;
