import { Container } from 'reactstrap';

import Section from '../components/Section';
import HeadResume from '../components/HeadResume';
import Resume from '../components/resume/Resume';

const ResumePage = () => {
  return (
    <>
      <Section section="cta" textCenter>
        <HeadResume />
      </Section>
      <Container className="px-3 px-lg-5">
        <Resume />
      </Container>
    </>
  );
};

export default ResumePage;
