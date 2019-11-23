import { Row, Col, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import { jadenCase } from '../../util';
import RaidProgress from './RaidProgress';

const CharProgress = props => {
  const acceptedRaids = [
    'Battle Of Dazaralor',
    'Crucible Of Storms',
    'Uldir',
    'The Eternal Palace'
  ];
  let raids = Object.entries(props)
    .map(([key, value]) => ({
      name: jadenCase(key.replace(/-/g, ' ')),
      ...value
    }))
    .filter(({ name }) => {
      return acceptedRaids.some(el => el === name);
    });

  return (
    <div className="project-section mb-5">
      <h3 className="project-section-title mb-3">Raid Progression</h3>
      <div className="metrics mb-4">
        <Row>
          {raids.map((raid, i) => {
            return <RaidProgress {...raid} key={i} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default CharProgress;
