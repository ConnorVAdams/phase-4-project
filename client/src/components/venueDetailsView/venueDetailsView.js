import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VenueConcertsCard from '../venueConcertsCard/venueConcertsCard'

const VenueDetailsView = ({venue}) => {

    console.log(venue)

    return (
        <Container className="my-5 text-center">
            <Row>
                <Col md={6}>
                    <img src="../assets/venue_interior_placeholder.png" className="img-fluid rounded" />
                </Col>
                <Col md={6}>
                    <h1 className="display-1">{venue.name}</h1>
                    <p className="lead"><i className="fa fa-map-marker-alt" style={{color: "orangered"}}></i> {venue.location}</p>
                    <VenueConcertsCard concerts={venue.concerts} />
                </Col>
            </Row>
            <Row className="my-5">
                <Col>
                    <Link to="/venues">
                        <Button variant="secondary" size="lg">Back To Venues</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default VenueDetailsView