import Header from "../../components/header"
import ArtistCard from '../../components/artistCard'
import { useFetch } from '../../hooks/customHooks'
import { Container, Row, Col } from 'react-bootstrap'

const URL = 'http://127.0.0.1:5000/api/v1/artists'

const Artists = () => {

    const { data } = useFetch(URL)

    console.log(data)

    return (
        <>
            <Header text="All Artists"/>
            <Container>
                <Row>
                    {data.map(({name, genre}) => {
                        return(
                            <Col md={4}>
                                <ArtistCard name={name} genre={genre} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Artists