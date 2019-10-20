import { Container, Row, Col } from 'reactstrap';

const ComingSoon = () => {
  return (
    <section className="cta-section py-5" style={{ height: '92.7vh' }}>
      <Container className="text-center">
        <Row>
          <Col xs="12">
            <h1>Coming Soon</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ComingSoon;
