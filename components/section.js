import { Container } from "reactstrap";

const Section = ({ section, title, children }) => {
  return (
    <section className={`${section}-section p-3 p-lg-5`}>
      <Container>
        {title ? (
          <h2 className="section-title font-weight-bold mb-5">{title}</h2>
        ) : null}
        {children}
      </Container>
    </section>
  );
};

export default Section;
