import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReduxSvg } from './ReduxSvg';

const Skill = ({ id, icons, title, desc }) => {
  return (
    <Col lg={3} xs={6} className="item">
      <div className="item-inner">
        <div className="item-icon">
          {icons.map((icon, i) => {
            return icon === 'redux' ? (
              <ReduxSvg key={i} />
            ) : (
              <FontAwesomeIcon key={id + i} icon={icon} />
            );
          })}
        </div>
        <h3 className="item-title">{title}</h3>
        <div className="item-desc">{desc} </div>
      </div>
    </Col>
  );
};

export default Skill;
