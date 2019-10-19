import { Container } from 'reactstrap';

const Content = ({ children }) => {
  return (
    <section className="project px-3 py-5 p-md-5">
      <Container>{children}</Container>
    </section>
  );
};

export default Content;
