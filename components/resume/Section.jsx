import { Row, Col } from "reactstrap";
const ResumeSection = ({ section, title, items }) => {
  return (
    <section className={`${section}-section py-3`}>
      <h3 className={`text-uppercase resume-section-heading mb-4`}>{title}</h3>
      {items.map(({ title, company, start, end, ul, desc }) => {
        return (
          <div className="item">
            <Row className="item-heading align-items-center mb-2">
              <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                {title}
              </h4>
              <Col className="item-meta text-muted text-left text-md-right">
                {company} | {end ? `${start} - ${end}` : `since ${start}`}
              </Col>
            </Row>
            <div className="item-content">
              <p>{desc}</p>
              {ul ? (
                <ul className="resume-list">
                  {ul.map((li, i) => {
                    return <li key={i}>{li}</li>;
                  })}
                </ul>
              ) : null}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ResumeSection;
