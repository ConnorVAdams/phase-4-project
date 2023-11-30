import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VenueConcertsCard from '../venueConcertsCard/venueConcertsCard'
import { useFetch } from '../../hooks/customHooks'

const URL = 'http://127.0.0.1:5000/api/v1/venues'


const VenueDetailsView = ({venue}) => {

    const {data: concerts} = useFetch(`${URL}/${venue.id}/concerts`)

    return (
        <Container className="my-5 text-center">
            <Row>
                <Col md={6}>
                    <img src="../assets/venue_interior_placeholder.png" className="img-fluid rounded" />
                </Col>
                <Col md={6}>
                    <h1 className="display-1">{venue.name}</h1>
                    <p className="lead"><i className="fa fa-map-marker-alt" style={{color: "orangered"}}></i> {venue.location}</p>
                    <VenueConcertsCard concerts={concerts} />
                </Col>
            </Row>
        </Container>
    )
}

export default VenueDetailsView