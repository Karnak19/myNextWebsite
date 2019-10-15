import { useState } from 'react';
import {
  faJsSquare,
  faReact,
  faVuejs,
  faNodeJs,
  faUbuntu,
  faBootstrap,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';

import Section from './Section';
import WithSkills from './WithSkills';

const Overview = () => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      icons: [faGitAlt],
      title: 'Versioning',
      desc: 'Working without Git is a no-go for me !'
    },
    {
      id: 2,
      icons: [faJsSquare],
      title: 'JavaScript',
      desc:
        'JS is my current favorite language, I love the ecosystem & the syntax. Always bet on JavaScript !'
    },
    {
      id: 3,
      icons: [faReact, faVuejs, 'redux'],
      title: 'Front End Development',
      desc:
        "I start Frontend development with React, which i fall in love with..! Recently I tried VueJS, which v3 looks pretty neat, but I'm still in favor of React (Hooks are life !)"
    },
    {
      id: 4,
      icons: [faNodeJs],
      title: 'Back End Development',
      desc:
        'I mostly run with ExpressJS as framework, Sequelize as an ORM. Mocha+Chai for integrations tests. Pretty interested to grew up around GraphQL.'
    },
    {
      id: 5,
      icons: [faBootstrap],
      title: 'Styling',
      desc:
        "As i'm not really good at designing, I love working with Boostrap to speed up the responsiveness. Recently I also looks up on Tailwind CSS, which looks cool !"
    },
    {
      id: 6,
      icons: [faUbuntu],
      title: 'Environment',
      desc:
        'I used to learn development in Ubuntu, and it still feel quite practical, easy to keep up-to-date, not too slow and UI clean.'
    }
  ]);
  return (
    <Section section="overview" title="What do I do">
      <div className="section-intro mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non voluptates
        possimus exercitationem eaque. Error voluptates facilis aut incidunt necessitatibus?
      </div>
      <WithSkills skills={skills} />
    </Section>
  );
};

export default Overview;
