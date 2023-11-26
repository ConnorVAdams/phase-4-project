import { Container, Row, Col } from 'react-bootstrap';

const IntroBlurb = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Header 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc in consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc in consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc in consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc in consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc in consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc in consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc in consequat.
          </p>
        </Col>
        <Col md={6}>
          <h2>Header 2</h2>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vel.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroBlurb;