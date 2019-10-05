import { Container } from "reactstrap";

import Layout from "../components/layout/Layout";
import Section from "../components/Section";
import HeadResume from "../components/HeadResume";
import Resume from "../components/resume/Resume";

const ResumePage = () => {
  return (
    <Layout>
      <Section section="cta" textCenter>
        <HeadResume />
      </Section>
      <Container className="px-3 lx-lg-5">
        <Resume />
      </Container>
    </Layout>
  );
};

export default ResumePage;
