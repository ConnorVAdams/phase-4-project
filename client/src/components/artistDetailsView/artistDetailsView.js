import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ArtistConcertsCard from '../artistConcertsCard'

const ArtistDetailsView = ({ artist }) => {

    return (
        <Container className="text-center my-5">
            <Row className="my-5">
                <Col>
                    <img src="../assets/artist_detail_placeholder.png" alt="artist detail placeholder" className='img-fluid rounded' />
                </Col>
                <Col>
                    <h1 className="display-1">{artist.name}</h1>
                    <p className="lead mb-5">{artist.description}</p>
                    <ArtistConcertsCard concerts={artist.concerts}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/artists">
                        <Button variant="secondary" size="lg">Back To All Artists</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default ArtistDetailsView