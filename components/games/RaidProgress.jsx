import { Row, Col, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import RaidProgressBar from './RaidProgressBar';

const RaidProgress = ({
  name,
  normal_bosses_killed,
  heroic_bosses_killed,
  mythic_bosses_killed,
  total_bosses
}) => {
  return (
    <Col xs={{ offset: 1, size: 10 }} xl={{ offset: 0, size: 6 }} className="metric mb-3">
      <Card inverse>
        <CardImg src={`static/${name}.jpg`} />
        <CardImgOverlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <CardTitle>{name}</CardTitle>
          <RaidProgressBar killed={normal_bosses_killed} total={total_bosses} difficulty="Normal" />
          <RaidProgressBar killed={heroic_bosses_killed} total={total_bosses} difficulty="Heroic" />
          <RaidProgressBar killed={mythic_bosses_killed} total={total_bosses} difficulty="Mythic" />
        </CardImgOverlay>
      </Card>
    </Col>
  );
};

export default RaidProgress;
