import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contributors</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white">Link 1</a></li>
              <li><a href="#!" className="text-white">Link 2</a></li>
              <li><a href="#!" className="text-white">Link 3</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Brought to you by:</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white">Link 4</a></li>
              <li><a href="#!" className="text-white">Link 5</a></li>
              <li><a href="#!" className="text-white">Link 6</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white">Link 7</a></li>
              <li><a href="#!" className="text-white">Link 8</a></li>
              <li><a href="#!" className="text-white">Link 9</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;