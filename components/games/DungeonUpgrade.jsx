import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DungeonUpgrade = ({ upgrade }) => {
  const stars = [];
  console.log(stars);

  for (let i = 0; i < upgrade; i++) {
    stars.push(' ');
  }
  if (stars.length >= 1) {
    return (
      <Col xs="6" sm="6" lg="12" xl="12">
        {stars.map(() => {
          return (
            <React.Fragment>
              Upgrade : <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
            </React.Fragment>
          );
        })}
      </Col>
    );
  } else {
    return (
      <Col xs="6" sm="6" lg="12" xl="12">
        Depleted
      </Col>
    );
  }
};

export default DungeonUpgrade;
