import { Col, Button } from 'reactstrap';

const DungeonLink = ({ url }) => {
  return (
    <Col xs="12" sm="12" lg="12" xl="12">
      <Button href={url} target="_blank" rel="noopener norefferer nofollow" outline color="primary">
        See on Raider.io
      </Button>
    </Col>
  );
};

export default DungeonLink;
