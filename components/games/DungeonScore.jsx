import { Col } from 'reactstrap';
const DungeonScore = ({ score }) => {
  return (
    <Col xs="6" sm="6" lg="12" xl="12">
      {' '}
      Score : {score}
    </Col>
  );
};

export default DungeonScore;
