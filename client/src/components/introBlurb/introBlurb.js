import { Container, Row, Col } from 'react-bootstrap';

const IntroBlurb = () => {
  return (
    <Container className="my-5 py-3">
      <Row>
        <Col md={6}>
          <h2 className="display-6">Discover Live Music Like Never Before</h2>
          <p className="lead">
            Step into the world of endless musical possibilities with our platform, where fans connect directly with artists and secure tickets to the most anticipated concerts. Experience the thrill of live performances and become part of a community that celebrates the power of music.
          </p>
          <hr />
          <h2 className="display-6">Your Gateway to Unforgettable Concert Experiences</h2>
          <p className="lead">
            Embark on a journey through the vibrant landscape of live music with our easy-to-use ticket purchasing website. Whether you're a die-hard fan or just exploring, we bring you closer to the artists you love and the concerts you've dreamed of attending. Get ready for an immersive experience in the world of live performances!"
          </p>
        </Col>
        <Col md={6}>
          <img className="img-fluid rounded" src="./assets/dj_view.jpg" alt="Flatiron school logo"/>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroBlurb; 