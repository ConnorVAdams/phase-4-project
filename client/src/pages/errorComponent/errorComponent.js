import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
    return (
        <Container className="text-center">
            <Row className="justify-content-center align-items-center" style={{ height: '75vh' }}>
                <Col xs={12} md={8} lg={6}>
                    <img src="./assets/smoking_cdjs.png" className="img-fluid rounded" />
                    <h1 style={{ fontSize: '10rem', fontWeight: 'bold' }}>404</h1>
                    <h2>Oops! Page not found.</h2>
                    <p>We can't seem to find the page you're looking for.</p>
                    <Link to="/">
                        <Button variant="primary">Go Home</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorComponent;