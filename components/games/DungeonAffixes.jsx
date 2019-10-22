import { Col } from 'reactstrap';

const DungeonAffixes = ({ affixes }) => {
  return (
    <Col xs="12" sm="12" lg="12" xl="12" className="mb-1">
      {affixes.map((affixe, i) => {
        return (
          <img
            key={i}
            src={`static/affixes/${affixe.id}.jpg`}
            className="mx-1"
            style={{
              maxWidth: '30px',
              border: '2px solid rgba(0, 0, 0, 0.774)',
              borderRadius: '5px'
            }}
          />
        );
      })}
    </Col>
  );
};

export default DungeonAffixes;
