import { Row } from 'reactstrap';
import Dungeon from './Dungeon';

const CharMythicPlus = ({ runs }) => {
  return (
    <div className="project-section mb-5">
      <h3 className="project-section-title mb-3">Mythic Plus</h3>
      <Row>
        {runs.map((dungeon, i) => {
          return <Dungeon {...dungeon} key={i} />;
        })}
      </Row>
    </div>
  );
};

export default CharMythicPlus;
