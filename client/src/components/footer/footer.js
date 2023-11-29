import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white text-center">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contributors</h5>
            <ul className="list-unstyled">
              <li><p className="lead">Connor Adams <i className="fab fa-linkedin"></i> <i className="fab fa-github"></i></p></li>
              <li><p className="lead">Zachary Talmadge <i className="fab fa-linkedin"></i> <i className="fab fa-github"></i></p></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Brought to you by:</h5>
            <img className="img-fluid rounded h-50" src="../assets/fis_logo.png" alt="Flatiron school logo"/>
            <p className="lead">Flatiron School</p>
          </Col>
          <Col md={4}>
            <h5>Social Media</h5>
            <i className="fab mx-3 fa-facebook" style={{ fontSize: "50px" }}></i>
            <i className="fab mx-3 fa-instagram" style={{ fontSize: "50px" }}></i>
            <i className="fab mx-3 fa-linkedin" style={{ fontSize: "50px" }}></i>
            <i className="fab mx-3 fa-github" style={{ fontSize: "50px" }}></i>
            <i className="fab mx-3 fa-discord" style={{ fontSize: "50px" }}></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;