import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from 'reactstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const GamesIntro = () => {
  const gamesFeatured = [
    {
      label: 'WoW',
      url: '/wow',
      img: 'https://i.imgur.com/buKcAHw.png'
    },
    {
      label: 'Apex Legends',
      url: '/apex',
      img: 'http://image.jeuxvideo.com/medias-sm/155137/1551371304-2322-jaquette-avant.jpg'
    }
  ];
  return (
    <section className="featured-section p-3 p-lg-5">
      <Container>
        <h2 className="section-title font-weight-bold mb-5">Hobbies</h2>
        <Row>
          {gamesFeatured.map((game, i) => {
            return (
              <Col xs="12" md="6" key={i}>
                <Card className="project-card">
                  <Row noGutters>
                    <Col lg="4" className="card-img-holder">
                      <CardImg src={game.img} alt="" />
                    </Col>
                    <Col lg="8">
                      <CardBody>
                        <CardTitle>
                          <h5>
                            <Link href={game.url}>
                              <a className="theme-link">{game.label}</a>
                            </Link>
                          </h5>
                        </CardTitle>
                        <CardText>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                          voluptates nihil dicta non explicabo totam, ipsa est, odio harum ex
                          itaque, nisi soluta omnis obcaecati distinctio repudiandae quos debitis
                          suscipit.
                        </CardText>
                      </CardBody>
                    </Col>
                  </Row>
                  <div className="link-mask">
                    <div className="link-mask-text">
                      <Link href={game.url}>
                        <Button color="primary">
                          <FontAwesomeIcon icon={faEye} /> Jump to {game.label}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default GamesIntro;
