import { Row, Button, Col, Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

import DungeonScore from './DungeonScore';
import DungeonUpgrade from './DungeonUpgrade';
import DungeonAffixes from './DungeonAffixes';
import DungeonLink from './DungeonLink';

const Dungeon = ({
  dungeon,
  score,
  mythic_level,
  short_name,
  url,
  num_keystone_upgrades,
  affixes
}) => {
  return (
    <Col
      xs={{ offset: 0, size: 12 }}
      lg={{ offset: 1, size: 10 }}
      xl={{ offset: 2, size: 8 }}
      className="mb-3"
    >
      <Card inverse style={{ minHeight: '200px' }}>
        <CardImg height="100%" src={`static/dungeons/${short_name}.jpg`} alt="Card image cap" />
        <CardImgOverlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <CardTitle style={{ fontSize: '1.4rem' }}>
            {dungeon} + {mythic_level}
          </CardTitle>
          <Row className="text-center">
            <DungeonScore score={score} />
            <DungeonUpgrade upgrade={num_keystone_upgrades} />
            <DungeonAffixes affixes={affixes} />
            <DungeonLink url={url} />
          </Row>
        </CardImgOverlay>
      </Card>
    </Col>
  );
};

export default Dungeon;
