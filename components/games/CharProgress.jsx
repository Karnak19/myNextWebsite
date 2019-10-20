import { Row, Col, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import { jadenCase } from '../../util';
import RaidProgressBar from './RaidProgressBar';

const CharProgress = props => {
  const rejectedRaids = [
    'Antorus The Burning Throne',
    'The Emerald Nightmare',
    'Trial Of Valor',
    'Tomb Of Sargeras',
    'The Nighthold'
  ];
  let raids = Object.entries(props)
    .map(([key, value]) => ({
      name: jadenCase(key.replace(/-/g, ' ')),
      ...value
    }))
    .filter(
      ({ name }) =>
        name !== 'Antorus The Burning Throne' &&
        name !== 'The Emerald Nightmare' &&
        name !== 'Trial Of Valor' &&
        name !== 'Tomb Of Sargeras' &&
        name !== 'The Nighthold'
    );

  return (
    <div className="project-section mb-5">
      <h3 className="project-section-title mb-3">Raid Progression</h3>
      <div className="metrics mb-4">
        <Row>
          {raids.map(
            (
              {
                name,
                normal_bosses_killed,
                heroic_bosses_killed,
                mythic_bosses_killed,
                total_bosses
              },
              i
            ) => {
              return (
                <Col
                  xs={{ offset: 1, size: 10 }}
                  xl={{ offset: 0, size: 6 }}
                  className="metric mb-3"
                  key={i}
                >
                  <Card inverse>
                    <CardImg src={`static/${name}.jpg`} />
                    <CardImgOverlay style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                      <CardTitle>{name}</CardTitle>
                      <RaidProgressBar
                        killed={normal_bosses_killed}
                        total={total_bosses}
                        difficulty="Normal"
                      />
                      <RaidProgressBar
                        killed={heroic_bosses_killed}
                        total={total_bosses}
                        difficulty="Heroic"
                      />
                      <RaidProgressBar
                        killed={mythic_bosses_killed}
                        total={total_bosses}
                        difficulty="Mythic"
                      />
                    </CardImgOverlay>
                  </Card>
                </Col>
              );
            }
          )}
        </Row>
      </div>
    </div>
  );
};

export default CharProgress;
