import { Container, Row, Col } from 'react-bootstrap'

const Header = ({text}) => {
    return (
        <Container className="text-center">
            <Row>
                <Col>
                    <h1 className="display-1">{text}</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Header