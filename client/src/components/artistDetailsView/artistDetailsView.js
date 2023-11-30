import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ArtistConcertsCard from '../artistConcertsCard'
import { useFetch } from '../../hooks/customHooks'

const URL = 'http://127.0.0.1:5000/api/v1/artists'

const ArtistDetailsView = ({ artist }) => {

    const { data: concerts } = useFetch(`${URL}/${artist.id}/concerts`)
    console.log(concerts)

    return (
        <Container className="my-5">
            <Row className="my-5">
                <Col>
                    <img src="../assets/artist_detail_placeholder.png" alt="artist detail placeholder" className='img-fluid rounded' />
                </Col>
                <Col>
                    <h1 className="display-1 text-center">{artist.name}</h1>
                    <p className="lead mb-5">{artist.description}</p>
                    <ArtistConcertsCard concerts={concerts}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ArtistDetailsView