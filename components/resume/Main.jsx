import { useState } from "react";
import { Col } from "reactstrap";

import Section from "./Section";
import Hr from "../Hr";

const Main = () => {
  const [jobs, setJobs] = useState([
    {
      title: "ReactJS trainer",
      work: {
        company: "Wild Code School",
        start: "February 2019",
        end: undefined
      },
      ul: [],
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium quo nihil rem expedita quamtenetur asperiores incidunt ipsa perferendis, rerum ullam dolorum, molestias, illum magni ut. Molestiae, errortempora!"
    }
  ]);
  const [projects, setProjects] = useState([
    {
      title: "kissBot",
      project: {
        type: "Personal"
      },
      ul: ["NodeJS", "DiscordJS API", "Google Sheet API", "Heroku"],
      desc:
        "Creating a Discord Bot for video game Guild use. We discovered that it was painful to manage multiple tools for in game raid events (Raid planner, Discord, Google Sheet for strategies, etc.). So I end up to create this Bot to completely remove Raid Planner. We can create events via kissBot only in Discord, and fullfill the strategy sheet, then post the team in Discord. Pretty useful and permit to save us a ton of time !"
    },
    {
      title: "myNextWebsite",
      project: {
        type: "Personal"
      },
      desc:
        "Well, this is the website where you are actually reading this. I wanted to give a try to server-side rendering via NextJS, and what better for it to make a brand new Portfolio ?",
      ul: [
        "NodeJS",
        "React",
        "Bootstrap/Reactstrap",
        "NextJS",
        "React-Fontawesome"
      ]
    }
  ]);
  return (
    <Col lg={8} xl={9} className="pr-0 pr-lg-5 resume-main">
      <Section items={jobs} title="Professional experiences" section="work" />
      <hr />
      <Section items={projects} title="Projects" section="work" />
    </Col>
  );
};

export default Main;
