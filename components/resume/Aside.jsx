import { useState } from "react";
import { Col } from "reactstrap";
import AsideSection from "./AsideSection";

const Aside = () => {
  const [sections, setSections] = useState([
    {
      section: "skills",
      title: "Skills",
      items: [
        {
          itemTitle: "Technical",
          list: [
            "git",
            "ReactJS / Redux",
            "VueJS / Vuex",
            "NodeJS / Express",
            "Sequelize (ORM)",
            "Rest/GraphQL designs",
            "MySQL / Postgres",
            "PHP / Symfony4",
            "Doctrine",
            "Api-platform"
          ]
        }
      ]
    },
    {
      section: "educations",
      title: "Educations",
      items: [
        {
          itemTitle: "BTS",
          list: ["SIO SLAM"]
        },
        {
          itemTitle: "BAC",
          list: ["STG CGRH"]
        }
      ]
    },
    {
      section: "languages",
      title: "Languages",
      items: [
        {
          itemTitle: "",
          list: ["French (native)", "English (technical)"]
        }
      ]
    },
    {
      section: "interests",
      title: "Hobbies",
      items: [
        {
          itemTitle: "",
          list: [
            "Internet culture (memes)",
            "Coffee",
            "Bodyboard",
            "Gaming",
            "Cats",
            "Snowboard"
          ]
        }
      ]
    }
  ]);
  return (
    <Col lg={4} xl={3} className="resume-aside px-lg-4 pb-lg-4">
      {sections.map(section => {
        return <AsideSection {...section} />;
      })}
    </Col>
  );
};

export default Aside;
